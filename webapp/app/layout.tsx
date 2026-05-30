import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Python 3 Tutorial — Exam Prep",
  description: "Interactive Python 3 refresher with exam-style tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              🐍 Python 3 Refresher
            </Link>
            <nav className="text-sm text-slate-500">
              University exam prep · in-browser Python
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        <footer className="max-w-6xl mx-auto px-4 py-8 text-xs text-slate-500">
          Code runs locally in your browser via Pyodide. Progress is saved in
          your browser only.
        </footer>
      </body>
    </html>
  );
}
