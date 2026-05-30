# Python 3 Tutorial — web app

An interactive Next.js front-end for the Python 3 refresher in the parent
folder. Each chapter's `lesson.md` is rendered as an article, and exam-style
tasks ship with starter code, multiple test cases, and a "Run tests" button
that executes Python **in the browser** via Pyodide. Progress is saved in
`localStorage`.

## Requirements

- Node.js 18 or newer
- npm (comes with Node)

## Run locally

```bash
cd "Python tutorial/webapp"

# IMPORTANT: if a node_modules/ folder is already present, delete it first.
# It was built inside a Linux sandbox during scaffolding and won't work on
# macOS — you need a fresh install on your machine.
rm -rf node_modules .next package-lock.json

npm install
npm run dev
```

Open <http://localhost:3000>.

The first time you click **Run tests** on a task, the browser downloads
Pyodide (~5 MB). After that, all runs are instant and work offline.

## Project layout

```
webapp/
├── app/
│   ├── layout.tsx              site shell
│   ├── page.tsx                home — chapter grid
│   ├── globals.css             Tailwind + lesson typography
│   └── chapter/[slug]/page.tsx chapter page (lesson + exercises)
├── components/
│   ├── ChapterCard.tsx         home card with progress bar
│   ├── LessonMarkdown.tsx      react-markdown wrapper
│   └── ExerciseRunner.tsx      textarea editor + Pyodide runner
├── lib/
│   ├── chapters.ts             chapter metadata + markdown loader (server)
│   ├── tasks.ts                task data: prompts, starters, test cases
│   ├── pyodide.ts              singleton CDN-loaded Pyodide
│   └── progress.ts             localStorage helpers
└── package.json
```

Lesson markdown is read at request time from the sibling tutorial folders
(`../01_io_and_variables/lesson.md`, etc.). That means editing the lessons
on disk immediately reflects in the running app — no build step.

## How the runner works

1. User types code into the textarea (auto-saved per-task to localStorage).
2. Clicking **Run tests** calls `runUserCode(code, stdin)` for every test
   case the task defines.
3. Inside Pyodide we redirect `sys.stdin` to an `io.StringIO` containing the
   stdin and capture `sys.stdout`.
4. The captured stdout is normalised (trailing whitespace per line, no
   trailing blank lines) and compared to the expected output.
5. If all test cases pass, the task is marked done (✓ badge + green border)
   and the chapter card's progress bar updates next time you visit the home
   page.

## Adding more tasks

Open `lib/tasks.ts` and append a `Task` to the relevant `CH<n>` array:

```ts
{
  id: "1.5",
  title: "My new task",
  prompt: "Description shown to the student (markdown-ish).",
  starter: "n = int(input())\n# write your code\n",
  tests: [
    { stdin: "5\n", expected: "25" },
  ],
},
```

## Build for production

```bash
npm run build
npm run start
```

`npm run build` performs `generateStaticParams` for every chapter, so the
markdown is read at build time. After a deploy, edits to the lesson `.md`
files require a rebuild.

## Caveats

- No login, no server-side state. Switching browsers or devices means
  starting over.
- Pyodide is loaded from `cdn.jsdelivr.net`. Offline-first deployments
  would need to self-host the Pyodide files.
- `input()` reads from the test case's stdin — exactly like the Estonian
  grader would feed it. Don't prompt with strings like `input("Enter: ")`.
