import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS, getChapterBySlug, loadLessonMarkdown } from "@/lib/chapters";
import { getTasksForChapter } from "@/lib/tasks";
import LessonMarkdown from "@/components/LessonMarkdown";
import ExerciseRunner from "@/components/ExerciseRunner";

export function generateStaticParams() {
  return CHAPTERS.map((c) => ({ slug: c.slug }));
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = getChapterBySlug(params.slug);
  if (!chapter) return notFound();

  const markdown = loadLessonMarkdown(chapter.slug);
  const tasks = getTasksForChapter(chapter.slug);

  const prev = CHAPTERS.find((c) => c.number === chapter.number - 1);
  const next = CHAPTERS.find((c) => c.number === chapter.number + 1);

  return (
    <div>
      <nav className="mb-4 text-sm">
        <Link href="/" className="text-brand-600 hover:underline">
          ← All chapters
        </Link>
      </nav>

      <header className="mb-6">
        <div className="text-xs uppercase tracking-wide text-slate-400">
          Chapter {chapter.number}
        </div>
        <h1 className="text-3xl font-bold">{chapter.title}</h1>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-lg p-5">
          <LessonMarkdown source={markdown} />
        </div>

        <div className="space-y-4">
          {tasks.length === 0 && (
            <div className="bg-white border rounded-lg p-5 text-slate-500 text-sm">
              No interactive tasks defined for this chapter yet. See the lesson
              on the left for exam-style task descriptions you can practise on
              paper or in your own editor.
            </div>
          )}
          {tasks.map((task) => (
            <ExerciseRunner key={task.id} task={task} />
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-between border-t pt-4 text-sm">
        <div>
          {prev && (
            <Link href={`/chapter/${prev.slug}`} className="text-brand-600 hover:underline">
              ← {prev.title}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link href={`/chapter/${next.slug}`} className="text-brand-600 hover:underline">
              {next.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
