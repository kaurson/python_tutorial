"use client";

// Lightweight, lazy singleton that loads Pyodide from the official CDN.
// We never bundle Pyodide — it's loaded at runtime in the browser.

const PYODIDE_VERSION = "0.26.2";
const CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

type PyodideInterface = {
  globals: { set: (k: string, v: unknown) => void; get: (k: string) => unknown };
  runPython: (code: string) => unknown;
};

declare global {
  interface Window {
    loadPyodide?: (opts: { indexURL: string }) => Promise<PyodideInterface>;
  }
}

let pyodidePromise: Promise<PyodideInterface> | null = null;

function loadPyodideScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.loadPyodide) return resolve();
    const script = document.createElement("script");
    script.src = `${CDN}pyodide.js`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load pyodide.js"));
    document.head.appendChild(script);
  });
}

export function getPyodide(): Promise<PyodideInterface> {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = (async () => {
    await loadPyodideScript();
    if (!window.loadPyodide) throw new Error("Pyodide loader missing");
    const py = await window.loadPyodide({ indexURL: CDN });
    return py;
  })();
  return pyodidePromise;
}

/**
 * Run user code with the given stdin and return what was printed to stdout
 * (and an error message if the code raised).
 */
export async function runUserCode(
  userCode: string,
  stdin: string,
): Promise<{ stdout: string; error: string | null }> {
  const py = await getPyodide();
  py.globals.set("_user_code", userCode);
  py.globals.set("_stdin_text", stdin);
  py.runPython(`
import sys, io, traceback
sys.stdin = io.StringIO(_stdin_text)
_buf = io.StringIO()
sys.stdout = _buf
_err = None
try:
    exec(_user_code, {"__name__": "__main__"})
except SystemExit:
    pass
except Exception:
    _err = traceback.format_exc()
sys.stdout = sys.__stdout__
sys.stdin = sys.__stdin__
_out = _buf.getvalue()
`);
  const stdout = (py.globals.get("_out") as string) ?? "";
  const error = (py.globals.get("_err") as string | null) ?? null;
  return { stdout, error };
}
