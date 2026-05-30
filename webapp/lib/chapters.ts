import fs from "node:fs";
import path from "node:path";

// The lesson markdown files live one level up from webapp/ — in the original
// tutorial folders like 01_io_and_variables/lesson.md.
const TUTORIAL_ROOT = path.resolve(process.cwd(), "..");

export type Chapter = {
  slug: string;          // e.g. "01_io_and_variables"
  number: number;        // 1..15
  title: string;         // e.g. "Input, output, variables"
  short: string;         // 1-line teaser for the home page
};

export const CHAPTERS: Chapter[] = [
  { slug: "01_io_and_variables",            number: 1,  title: "Input, output, variables",       short: "input(), print(), type conversion, f-strings" },
  { slug: "02_numbers_and_math",            number: 2,  title: "Numbers & math",                  short: "+ - * / // %, rounding, min/max" },
  { slug: "03_strings",                     number: 3,  title: "Strings",                         short: "Indexing, slicing, methods, iteration" },
  { slug: "04_conditionals",                number: 4,  title: "Conditionals",                    short: "if / elif / else, boolean logic" },
  { slug: "05_loops",                       number: 5,  title: "Loops",                           short: "for, while, range, break, continue" },
  { slug: "06_lists_and_tuples",            number: 6,  title: "Lists & tuples",                  short: "Indexing, sorting, comprehensions, unpacking" },
  { slug: "07_dictionaries_and_sets",       number: 7,  title: "Dictionaries & sets",             short: "Counting, lookups, set operations" },
  { slug: "08_functions",                   number: 8,  title: "Functions",                       short: "def, return, parameters, recursion" },
  { slug: "09_files_and_text_processing",   number: 9,  title: "Files & text processing",         short: "open(), with, parsing lines" },
  { slug: "10_mock_exam",                   number: 10, title: "Mock exam",                       short: "6 mixed exam-style problems" },
  { slug: "11_classes_and_objects",         number: 11, title: "Classes & objects",               short: "class, __init__, attributes, instances" },
  { slug: "12_methods_and_dunders",         number: 12, title: "Methods & dunder methods",        short: "self, __str__, __eq__, __lt__" },
  { slug: "13_properties_and_encapsulation",number: 13, title: "Encapsulation, getters/setters",  short: "@property, validation, read-only" },
  { slug: "14_inheritance",                 number: 14, title: "Inheritance & extending classes", short: "Subclasses, super(), overriding" },
  { slug: "15_abstract_classes",            number: 15, title: "Abstract classes & polymorphism", short: "ABC, @abstractmethod, duck typing" },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function loadLessonMarkdown(slug: string): string {
  // Chapter 10 uses README.md, others use lesson.md
  const fileName = slug === "10_mock_exam" ? "README.md" : "lesson.md";
  const filePath = path.join(TUTORIAL_ROOT, slug, fileName);
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    return `# Missing lesson\n\nCould not load \`${filePath}\`.\n\nMake sure the webapp/ folder sits inside the "Python tutorial" directory.`;
  }
}
