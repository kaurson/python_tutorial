"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Chapter } from "@/lib/chapters";

type Props = {
  chapter: Chapter;
  taskIds: string[];
};

export default function ChapterCard({ chapter, taskIds }: Props) {
  const [done, setDone] = useState(0);

  useEffect(() => {
    const n = taskIds.filter((id) => localStorage.getItem(`done:${id}`) === "1").length;
    setDone(n);
  }, [taskIds]);

  const total = taskIds.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <Link
      href={`/chapter/${chapter.slug}`}
      className="block bg-white border rounded-lg p-4 hover:shadow-md hover:border-brand-500 transition"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400">
            Chapter {chapter.number}
          </div>
          <h2 className="text-lg font-semibold">{chapter.title}</h2>
        </div>
        {total > 0 && (
          <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
            {done}/{total}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600 mb-3">{chapter.short}</p>
      {total > 0 && (
        <div className="h-1.5 bg-slate-100 rounded">
          <div
            className="h-1.5 bg-brand-500 rounded transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </Link>
  );
}
