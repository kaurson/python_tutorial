import { CHAPTERS } from "@/lib/chapters";
import { getTasksForChapter } from "@/lib/tasks";
import ChapterCard from "@/components/ChapterCard";

export default function HomePage() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Python 3 — university entrance exam prep
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Fifteen chapters of refresher material with exam-style tasks. Code
          runs entirely in your browser via Pyodide — no install required.
          Progress is saved locally on this device.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHAPTERS.map((chapter) => {
          const taskIds = getTasksForChapter(chapter.slug).map((t) => t.id);
          return (
            <ChapterCard key={chapter.slug} chapter={chapter} taskIds={taskIds} />
          );
        })}
      </div>
    </div>
  );
}
