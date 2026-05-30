"use client";

import { useEffect, useRef, useState } from "react";
import type { Task } from "@/lib/tasks";
import { runUserCode, getPyodide } from "@/lib/pyodide";
import { loadCode, saveCode, setDone, isDone } from "@/lib/progress";

type Result = {
  pass: boolean;
  stdout: string;
  expected: string;
  error: string | null;
  stdin: string;
};

function normalize(s: string): string {
  // Trim trailing whitespace on each line + drop trailing blank lines
  return s
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n")
    .replace(/\n+$/, "");
}

export default function ExerciseRunner({ task }: { task: Task }) {
  const [code, setCode] = useState<string>(task.starter);
  const [results, setResults] = useState<Result[] | null>(null);
  const [running, setRunning] = useState(false);
  const [pyReady, setPyReady] = useState(false);
  const [completed, setCompleted] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  // Hydrate from localStorage on first mount
  useEffect(() => {
    setCode(loadCode(task.id, task.starter));
    setCompleted(isDone(task.id));
  }, [task.id, task.starter]);

  // Pre-warm Pyodide in the background, but only after first interaction
  // on this page so we don't slow the initial render.
  function warmPyodide() {
    if (pyReady) return;
    getPyodide().then(() => setPyReady(true)).catch(() => setPyReady(false));
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCode(e.target.value);
    saveCode(task.id, e.target.value);
  }

  function handleTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const ta = e.currentTarget;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const next = code.substring(0, start) + "    " + code.substring(end);
    setCode(next);
    saveCode(task.id, next);
    // restore caret after React render
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = start + 4;
    });
  }

  async function runAll() {
    setRunning(true);
    setResults(null);
    try {
      const out: Result[] = [];
      for (const tc of task.tests) {
        const { stdout, error } = await runUserCode(code, tc.stdin);
        const pass = !error && normalize(stdout) === normalize(tc.expected);
        out.push({ pass, stdout, expected: tc.expected, error, stdin: tc.stdin });
      }
      setResults(out);
      const allPass = out.every((r) => r.pass);
      setDone(task.id, allPass);
      setCompleted(allPass);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setResults([
        { pass: false, stdout: "", expected: "", error: msg, stdin: "" },
      ]);
    } finally {
      setRunning(false);
    }
  }

  function reset() {
    setCode(task.starter);
    saveCode(task.id, task.starter);
    setResults(null);
    setDone(task.id, false);
    setCompleted(false);
  }

  const passed = results ? results.filter((r) => r.pass).length : 0;
  const total = task.tests.length;

  return (
    <div
      className={`bg-white border rounded-lg p-4 ${
        completed ? "border-emerald-400" : ""
      }`}
      onMouseEnter={warmPyodide}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold">
          <span className="text-slate-400 mr-2">T{task.id}</span>
          {task.title}
        </h3>
        {completed && (
          <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
            ✓ done
          </span>
        )}
      </div>

      <p className="text-sm text-slate-600 mb-3 whitespace-pre-wrap">
        {task.prompt}
      </p>

      <textarea
        ref={taRef}
        spellCheck={false}
        value={code}
        onChange={handleChange}
        onKeyDown={handleTab}
        className="w-full min-h-[160px] font-mono text-sm border rounded p-3 bg-slate-50 focus:bg-white focus:border-brand-500 focus:outline-none"
      />

      <div className="flex items-center gap-2 mt-3">
        <button
          onClick={runAll}
          disabled={running}
          className="px-3 py-1.5 bg-brand-600 text-white text-sm rounded hover:bg-brand-700 disabled:opacity-60"
        >
          {running ? "Running…" : "Run tests"}
        </button>
        <button
          onClick={reset}
          className="px-3 py-1.5 border text-sm rounded hover:bg-slate-50"
        >
          Reset code
        </button>
        {!pyReady && (
          <span className="text-xs text-slate-400 ml-2">
            Pyodide loads on first run (~5 MB)
          </span>
        )}
        {results && (
          <span
            className={`ml-auto text-sm font-medium ${
              passed === total ? "text-emerald-600" : "text-amber-600"
            }`}
          >
            {passed}/{total} passing
          </span>
        )}
      </div>

      {results && (
        <div className="mt-3 space-y-2">
          {results.map((r, i) => (
            <details
              key={i}
              className={`border rounded p-2 text-sm ${
                r.pass ? "border-emerald-300 bg-emerald-50" : "border-rose-300 bg-rose-50"
              }`}
              open={!r.pass}
            >
              <summary className="cursor-pointer">
                {r.pass ? "✓" : "✗"} Test {i + 1}
              </summary>
              <div className="mt-2 grid sm:grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="font-semibold text-slate-600">stdin</div>
                  <pre className="whitespace-pre-wrap bg-white border rounded p-2">
                    {r.stdin || "(empty)"}
                  </pre>
                </div>
                <div>
                  <div className="font-semibold text-slate-600">expected</div>
                  <pre className="whitespace-pre-wrap bg-white border rounded p-2">
                    {r.expected}
                  </pre>
                </div>
                <div>
                  <div className="font-semibold text-slate-600">your output</div>
                  <pre className="whitespace-pre-wrap bg-white border rounded p-2">
                    {r.error ? r.error : r.stdout || "(no output)"}
                  </pre>
                </div>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
