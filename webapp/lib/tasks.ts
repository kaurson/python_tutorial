/**
 * Task definitions for every chapter.
 *
 * A "test case" gives the student's program some stdin and the expected
 * stdout. The runner trims trailing whitespace before comparing.
 */

export type TestCase = {
  stdin: string;
  expected: string;
  label?: string;
};

export type Task = {
  id: string;          // e.g. "1.1"
  title: string;       // e.g. "Average of three"
  prompt: string;      // markdown description
  starter: string;     // initial code in the editor
  tests: TestCase[];
};

export type ChapterTasks = {
  slug: string;
  tasks: Task[];
};

// ---------------------------------------------------------------------------
// Ch 1 — IO and variables
// ---------------------------------------------------------------------------
const CH1: Task[] = [
  {
    id: "1.1",
    title: "Average of three",
    prompt:
      "Read three numbers, one per line. Print their average rounded to **2 decimals** (e.g. `5.00`).",
    starter: "a = float(input())\nb = float(input())\nc = float(input())\n# print average with 2 decimals\n",
    tests: [
      { stdin: "4\n5\n6\n", expected: "5.00" },
      { stdin: "1\n2\n3\n", expected: "2.00" },
      { stdin: "10\n20\n30\n", expected: "20.00" },
    ],
  },
  {
    id: "1.2",
    title: "Greeting",
    prompt:
      "Read a name on the first line and a year of birth on the second.\nPrint: `Tere, <name>! You will turn <age> in 2026.`",
    starter: "name = input()\nyear = int(input())\n# compute age (current year is 2026) and print the greeting\n",
    tests: [
      { stdin: "Mari\n2009\n", expected: "Tere, Mari! You will turn 17 in 2026." },
      { stdin: "Jaan\n2000\n", expected: "Tere, Jaan! You will turn 26 in 2026." },
    ],
  },
  {
    id: "1.3",
    title: "Swap and print",
    prompt:
      "Read two integers separated by a space on one line (e.g. `3 7`). Print them swapped, separated by a space (`7 3`).",
    starter: "a, b = input().split()\n# print them swapped\n",
    tests: [
      { stdin: "3 7\n", expected: "7 3" },
      { stdin: "10 20\n", expected: "20 10" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 2 — Numbers & math
// ---------------------------------------------------------------------------
const CH2: Task[] = [
  {
    id: "2.1",
    title: "Cents to euros",
    prompt: "Read an integer amount in cents. Print it as `<eur> € <ct> ct`.",
    starter: "total = int(input())\n# print as '<eur> € <ct> ct'\n",
    tests: [
      { stdin: "523\n", expected: "5 € 23 ct" },
      { stdin: "7\n", expected: "0 € 7 ct" },
      { stdin: "100\n", expected: "1 € 0 ct" },
    ],
  },
  {
    id: "2.2",
    title: "Last digit",
    prompt: "Read an integer (could be negative). Print its last (unit) digit.",
    starter: "n = int(input())\n# print last digit (use abs)\n",
    tests: [
      { stdin: "12345\n", expected: "5" },
      { stdin: "-87\n", expected: "7" },
      { stdin: "0\n", expected: "0" },
    ],
  },
  {
    id: "2.3",
    title: "Rectangle stats",
    prompt: "Read two positive integers (width and height) on one line. Print area and perimeter separated by a space.",
    starter: "w, h = map(int, input().split())\n# print area and perimeter\n",
    tests: [
      { stdin: "4 5\n", expected: "20 18" },
      { stdin: "10 3\n", expected: "30 26" },
    ],
  },
  {
    id: "2.4",
    title: "Minutes to H:MM",
    prompt: "Read a number of minutes. Print it as `H:MM`.",
    starter: "m = int(input())\n# format as H:MM (use f'{mm:02d}')\n",
    tests: [
      { stdin: "135\n", expected: "2:15" },
      { stdin: "8\n", expected: "0:08" },
      { stdin: "60\n", expected: "1:00" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 3 — Strings
// ---------------------------------------------------------------------------
const CH3: Task[] = [
  {
    id: "3.1",
    title: "Estonian vowel count",
    prompt: "Read a line. Print how many vowels it contains (count `a e i o u õ ä ö ü`, both upper and lower case).",
    starter: "VOWELS = set('aeiouõäöüAEIOUÕÄÖÜ')\ns = input()\n# count vowels\n",
    tests: [
      { stdin: "Tere, Mari!\n", expected: "4" },
      { stdin: "Õun\n", expected: "2" },
      { stdin: "bcdfg\n", expected: "0" },
    ],
  },
  {
    id: "3.2",
    title: "Reverse the line",
    prompt: "Read a line, print it reversed.",
    starter: "s = input()\n# print reversed (s[::-1])\n",
    tests: [
      { stdin: "Tartu\n", expected: "utraT" },
      { stdin: "abc\n", expected: "cba" },
    ],
  },
  {
    id: "3.3",
    title: "Initials",
    prompt:
      "Read a full name (any number of words). Print the initials in upper case, separated by dots, ending with a dot.",
    starter: "name = input()\n# print initials like 'M.L.S.'\n",
    tests: [
      { stdin: "jaan tatikas\n", expected: "J.T." },
      { stdin: "Mari Liis Saar\n", expected: "M.L.S." },
    ],
  },
  {
    id: "3.4",
    title: "Censor a word",
    prompt:
      "Read a sentence on the first line and a word on the second. Replace every occurrence of that word in the sentence with asterisks of the same length. Print the result.",
    starter: "sentence = input()\nword = input()\n# replace with asterisks\n",
    tests: [
      {
        stdin: "Mari likes Mari but Mari is busy\nMari\n",
        expected: "**** likes **** but **** is busy",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 4 — Conditionals
// ---------------------------------------------------------------------------
const CH4: Task[] = [
  {
    id: "4.1",
    title: "Leap year",
    prompt: "Read a year. Print `leap` if it is a leap year, otherwise `not leap`.",
    starter: "y = int(input())\n# leap if (%4==0 and %100!=0) or %400==0\n",
    tests: [
      { stdin: "2000\n", expected: "leap" },
      { stdin: "1900\n", expected: "not leap" },
      { stdin: "2024\n", expected: "leap" },
      { stdin: "2023\n", expected: "not leap" },
    ],
  },
  {
    id: "4.2",
    title: "Grade letter",
    prompt:
      "Read a score 0..100 and print the letter grade: 90-100 A, 80-89 B, 70-79 C, 60-69 D, 0-59 F. Outside 0..100 print `invalid`.",
    starter: "s = int(input())\n",
    tests: [
      { stdin: "95\n", expected: "A" },
      { stdin: "85\n", expected: "B" },
      { stdin: "0\n", expected: "F" },
      { stdin: "101\n", expected: "invalid" },
      { stdin: "-5\n", expected: "invalid" },
    ],
  },
  {
    id: "4.3",
    title: "Triangle type",
    prompt:
      "Read three positive integers (side lengths) on one line. Print `equilateral`, `isosceles`, `scalene`, or `not a triangle`.",
    starter: "a, b, c = sorted(map(int, input().split()))\n",
    tests: [
      { stdin: "3 3 3\n", expected: "equilateral" },
      { stdin: "3 3 4\n", expected: "isosceles" },
      { stdin: "3 4 5\n", expected: "scalene" },
      { stdin: "1 2 3\n", expected: "not a triangle" },
    ],
  },
  {
    id: "4.4",
    title: "Sign + parity",
    prompt: "Read an integer. Print one of: `positive even`, `positive odd`, `negative even`, `negative odd`, `zero`.",
    starter: "n = int(input())\n",
    tests: [
      { stdin: "4\n", expected: "positive even" },
      { stdin: "-3\n", expected: "negative odd" },
      { stdin: "0\n", expected: "zero" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 5 — Loops
// ---------------------------------------------------------------------------
const CH5: Task[] = [
  {
    id: "5.1",
    title: "Sum positives until 0",
    prompt: "Read integers one per line until `0`. Skip negatives. Print the sum of the positive ones.",
    starter: "total = 0\n# loop with break on 0 and continue on negative\n",
    tests: [
      { stdin: "5\n3\n-2\n10\n0\n", expected: "18" },
      { stdin: "0\n", expected: "0" },
      { stdin: "1\n2\n3\n0\n", expected: "6" },
    ],
  },
  {
    id: "5.2",
    title: "Countdown",
    prompt: "Read a positive integer n. Print numbers from n down to 1, one per line, then `Start!`.",
    starter: "n = int(input())\n",
    tests: [
      { stdin: "3\n", expected: "3\n2\n1\nStart!" },
      { stdin: "1\n", expected: "1\nStart!" },
    ],
  },
  {
    id: "5.3",
    title: "Multiplication table",
    prompt: "Read an integer n. Print n's multiplication table from 1 to 10, like `n * i = product` per line.",
    starter: "n = int(input())\n",
    tests: [
      {
        stdin: "3\n",
        expected:
          "3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n3 * 6 = 18\n3 * 7 = 21\n3 * 8 = 24\n3 * 9 = 27\n3 * 10 = 30",
      },
    ],
  },
  {
    id: "5.4",
    title: "Digit sum",
    prompt: "Read a non-negative integer. Print the sum of its digits. Use `% 10` and `// 10` — no string conversion.",
    starter: "n = int(input())\n",
    tests: [
      { stdin: "1729\n", expected: "19" },
      { stdin: "0\n", expected: "0" },
      { stdin: "9999\n", expected: "36" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 6 — Lists & tuples
// ---------------------------------------------------------------------------
const CH6: Task[] = [
  {
    id: "6.1",
    title: "Sort descending",
    prompt: "Read space-separated integers. Print them sorted in descending order, space-separated.",
    starter: "xs = list(map(int, input().split()))\n",
    tests: [
      { stdin: "3 1 4 1 5 9 2 6\n", expected: "9 6 5 4 3 2 1 1" },
      { stdin: "1\n", expected: "1" },
    ],
  },
  {
    id: "6.2",
    title: "Second largest unique",
    prompt:
      "Read space-separated integers. Print the second-largest unique value, or `none` if fewer than 2 unique values exist.",
    starter: "xs = list(map(int, input().split()))\n",
    tests: [
      { stdin: "5 1 5 3 3\n", expected: "3" },
      { stdin: "5 5 5\n", expected: "none" },
      { stdin: "9 8 7\n", expected: "8" },
    ],
  },
  {
    id: "6.3",
    title: "Average and above-average",
    prompt:
      "Read space-separated integers. Print the average (2 decimals) on line 1. On line 2, print all values strictly greater than the average, space-separated, in original order.",
    starter: "xs = list(map(int, input().split()))\n",
    tests: [
      { stdin: "1 2 3 4 5 6\n", expected: "3.50\n4 5 6" },
      { stdin: "10 10 10\n", expected: "10.00\n" },
    ],
  },
  {
    id: "6.4",
    title: "Reverse without slicing",
    prompt: "Read space-separated integers. Print them reversed, space-separated. Use a loop, no `[::-1]`.",
    starter: "xs = list(map(int, input().split()))\n",
    tests: [
      { stdin: "10 20 30 40\n", expected: "40 30 20 10" },
      { stdin: "1\n", expected: "1" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 7 — Dicts & sets
// ---------------------------------------------------------------------------
const CH7: Task[] = [
  {
    id: "7.1",
    title: "Word frequency",
    prompt: "Read a line of text. Print each unique word with its count, alphabetically, one per line as `word count`.",
    starter: "text = input()\n",
    tests: [
      {
        stdin: "kana muna kana kala muna kana\n",
        expected: "kala 1\nkana 3\nmuna 2",
      },
    ],
  },
  {
    id: "7.2",
    title: "Most common letter",
    prompt:
      "Read a line. Print the most common letter (ignore spaces, case-insensitive). Break ties alphabetically.",
    starter: "s = input().lower()\n",
    tests: [
      { stdin: "Hello World\n", expected: "l" },
      { stdin: "aabbcc\n", expected: "a" },
    ],
  },
  {
    id: "7.3",
    title: "Common elements",
    prompt:
      "Read two lines, each containing space-separated integers. Print integers that appear in both, sorted ascending, space-separated.",
    starter: "a = set(map(int, input().split()))\nb = set(map(int, input().split()))\n",
    tests: [
      { stdin: "1 2 3 4 5\n3 4 5 6 7\n", expected: "3 4 5" },
      { stdin: "1 2\n3 4\n", expected: "" },
    ],
  },
  {
    id: "7.4",
    title: "Unique count",
    prompt: "Read a line of space-separated integers. Print the number of distinct values.",
    starter: "xs = input().split()\n",
    tests: [
      { stdin: "1 2 3 2 1 4 5 4\n", expected: "5" },
      { stdin: "7\n", expected: "1" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 8 — Functions
// ---------------------------------------------------------------------------
const CH8: Task[] = [
  {
    id: "8.1",
    title: "Primes in a range",
    prompt: "Write `is_prime(n)`. Read `a b` on one line. Print all primes in [a, b] separated by spaces.",
    starter: "def is_prime(n):\n    # TODO\n    return False\n\na, b = map(int, input().split())\n",
    tests: [
      { stdin: "10 20\n", expected: "11 13 17 19" },
      { stdin: "2 5\n", expected: "2 3 5" },
    ],
  },
  {
    id: "8.2",
    title: "Reverse digits",
    prompt: "Write `reverse_number(n)`. Read an integer and print the reversed digits.",
    starter: "def reverse_number(n):\n    # TODO\n    return 0\n\nn = int(input())\nprint(reverse_number(n))\n",
    tests: [
      { stdin: "1730\n", expected: "371" },
      { stdin: "12345\n", expected: "54321" },
    ],
  },
  {
    id: "8.3",
    title: "GCD by Euclid",
    prompt: "Write `gcd(a, b)`. Read `a b`, print their GCD.",
    starter: "def gcd(a, b):\n    # TODO\n    return 0\n\na, b = map(int, input().split())\nprint(gcd(a, b))\n",
    tests: [
      { stdin: "48 18\n", expected: "6" },
      { stdin: "100 75\n", expected: "25" },
      { stdin: "13 7\n", expected: "1" },
    ],
  },
  {
    id: "8.4",
    title: "Word count",
    prompt: "Write `word_count(s)` returning the number of whitespace-separated words. Read a line, print the count.",
    starter: "def word_count(s):\n    # TODO\n    return 0\n\nprint(word_count(input()))\n",
    tests: [
      { stdin: "Tere maailm, kuidas läheb\n", expected: "4" },
      { stdin: "one\n", expected: "1" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 9 — Files (use multi-line stdin instead of a real file)
// ---------------------------------------------------------------------------
const CH9: Task[] = [
  {
    id: "9.1",
    title: "Top student (from stdin)",
    prompt:
      "Read lines `name;score` until EOF. Print the name with the highest score; on a tie, the alphabetically first name.",
    starter:
      "import sys\nrows = []\nfor line in sys.stdin:\n    line = line.strip()\n    if not line: continue\n    name, score = line.split(';')\n    rows.append((name, int(score)))\n",
    tests: [
      {
        stdin: "Mari;87\nJaan;92\nKati;92\n",
        expected: "Jaan",
      },
      {
        stdin: "Toomas;55\nLiis;78\n",
        expected: "Liis",
      },
    ],
  },
  {
    id: "9.2",
    title: "Class average",
    prompt: "Read `name;score` lines. Print the average score to 1 decimal.",
    starter:
      "import sys\nrows = []\nfor line in sys.stdin:\n    line = line.strip()\n    if not line: continue\n    name, score = line.split(';')\n    rows.append(int(score))\n",
    tests: [
      { stdin: "Mari;80\nJaan;90\n", expected: "85.0" },
      { stdin: "A;100\nB;0\nC;50\n", expected: "50.0" },
    ],
  },
  {
    id: "9.3",
    title: "Pass list",
    prompt: "Read `name;score` lines. Print names of students with score >= 60, alphabetically, one per line.",
    starter:
      "import sys\nrows = []\nfor line in sys.stdin:\n    line = line.strip()\n    if not line: continue\n    name, score = line.split(';')\n    rows.append((name, int(score)))\n",
    tests: [
      {
        stdin: "Mari;87\nJaan;55\nLiis;78\nAnna;60\n",
        expected: "Anna\nLiis\nMari",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 10 — Mock exam
// ---------------------------------------------------------------------------
const CH10: Task[] = [
  {
    id: "M1",
    title: "Palindrome",
    prompt: "Read a string. Print `yes` if it is a palindrome (ignoring case and spaces), otherwise `no`.",
    starter: "s = input()\n",
    tests: [
      { stdin: "Saippuakauppias\n", expected: "yes" },
      { stdin: "Mari\n", expected: "no" },
      { stdin: "a b a\n", expected: "yes" },
    ],
  },
  {
    id: "M2",
    title: "Caesar cipher",
    prompt: "Read key k, then a line of text. Shift each English letter forward by k, wrapping within case.",
    starter: "k = int(input())\ntext = input()\n",
    tests: [
      { stdin: "3\nHello, World!\n", expected: "Khoor, Zruog!" },
      { stdin: "1\nabc XYZ\n", expected: "bcd YZA" },
    ],
  },
  {
    id: "M3",
    title: "min / max / median",
    prompt: "Read space-separated integers. Print three lines: min, max, median (1 decimal).",
    starter: "xs = sorted(map(int, input().split()))\n",
    tests: [
      { stdin: "5 3 8 1 9 2 7\n", expected: "1\n9\n5.0" },
      { stdin: "1 2 3 4\n", expected: "1\n4\n2.5" },
    ],
  },
  {
    id: "M4",
    title: "Word counter alphabetical",
    prompt: "Read a line. Print each unique word as `word: count`, alphabetically.",
    starter: "text = input()\n",
    tests: [
      { stdin: "the cat sat on the mat\n", expected: "cat: 1\nmat: 1\non: 1\nsat: 1\nthe: 2" },
    ],
  },
  {
    id: "M5",
    title: "Triangle of stars",
    prompt: "Read n. Print a right-aligned triangle of stars of height n.",
    starter: "n = int(input())\n",
    tests: [
      { stdin: "4\n", expected: "   *\n  **\n ***\n****" },
      { stdin: "1\n", expected: "*" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 11 — Classes & objects
// ---------------------------------------------------------------------------
const CH11: Task[] = [
  {
    id: "11.1",
    title: "Point class",
    prompt: "Define `Point(x=0, y=0)`. Read `x y`, build a Point, print `(x, y)`.",
    starter: "class Point:\n    def __init__(self, x=0, y=0):\n        # TODO\n        pass\n\nx, y = map(int, input().split())\n",
    tests: [
      { stdin: "3 4\n", expected: "(3, 4)" },
      { stdin: "-1 0\n", expected: "(-1, 0)" },
    ],
  },
  {
    id: "11.2",
    title: "Rectangle class",
    prompt: "Define `Rectangle(width, height)`. Read `w h`. Print area and perimeter separated by a space.",
    starter: "class Rectangle:\n    # TODO\n    pass\n\nw, h = map(int, input().split())\n",
    tests: [
      { stdin: "4 5\n", expected: "20 18" },
      { stdin: "1 1\n", expected: "1 4" },
    ],
  },
  {
    id: "11.3",
    title: "Book class",
    prompt: "Define `Book(title, author, year)`. Read 3 lines. Print `<title> by <author> (<year>)`.",
    starter: "class Book:\n    # TODO\n    pass\n",
    tests: [
      { stdin: "Pippi\nAstrid\n1945\n", expected: "Pippi by Astrid (1945)" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 12 — Methods & dunders
// ---------------------------------------------------------------------------
const CH12: Task[] = [
  {
    id: "12.1",
    title: "Rectangle methods",
    prompt:
      "Define `Rectangle(w, h)` with methods `area()`, `perimeter()`, and `__str__` returning `Rectangle WxH`. Print three lines (str, area, perimeter).",
    starter: "class Rectangle:\n    # TODO methods\n    pass\n\nw, h = map(int, input().split())\nr = Rectangle(w, h)\n",
    tests: [
      { stdin: "4 5\n", expected: "Rectangle 4x5\n20\n18" },
    ],
  },
  {
    id: "12.2",
    title: "Bank Account",
    prompt:
      "Define `Account(owner, balance=0)` with `deposit`, `withdraw` (prints `insufficient` on overdraft), `__str__` = `<owner>: <balance> EUR`. Read owner, deposit, withdraw. Print after each.",
    starter: "class Account:\n    # TODO\n    pass\n\nowner = input()\nd = int(input())\nw = int(input())\nacc = Account(owner)\n",
    tests: [
      { stdin: "Mari\n100\n40\n", expected: "Mari: 100 EUR\nMari: 60 EUR" },
      { stdin: "Mari\n50\n100\n", expected: "Mari: 50 EUR\ninsufficient\nMari: 50 EUR" },
    ],
  },
  {
    id: "12.4",
    title: "Point distance",
    prompt: "Define `Point(x, y)` with `distance_to(other)`. Read 2 points, print distance (2 decimals).",
    starter: "import math\nclass Point:\n    # TODO\n    pass\n\nx1, y1 = map(float, input().split())\nx2, y2 = map(float, input().split())\n",
    tests: [
      { stdin: "0 0\n3 4\n", expected: "5.00" },
      { stdin: "1 1\n4 5\n", expected: "5.00" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 13 — Encapsulation
// ---------------------------------------------------------------------------
const CH13: Task[] = [
  {
    id: "13.1",
    title: "Temperature with property",
    prompt:
      "Define `Temperature(celsius)` with `@property celsius` (reject < -273.15) and `@property fahrenheit`. Read c. If invalid print `invalid`, else `<c> C = <f> F` (f to 2 decimals).",
    starter: "class Temperature:\n    # TODO\n    pass\n",
    tests: [
      { stdin: "20\n", expected: "20.0 C = 68.00 F" },
      { stdin: "-300\n", expected: "invalid" },
    ],
  },
  {
    id: "13.3",
    title: "Circle with read-only props",
    prompt:
      "Define `Circle(radius)`. Read-only `area`, `circumference`. Radius must be > 0. Read r. If invalid print `invalid`. Else print radius, area (2dp), circumference (2dp).",
    starter: "import math\nclass Circle:\n    # TODO\n    pass\n",
    tests: [
      { stdin: "3\n", expected: "3.0\n28.27\n18.85" },
      { stdin: "-1\n", expected: "invalid" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 14 — Inheritance
// ---------------------------------------------------------------------------
const CH14: Task[] = [
  {
    id: "14.2",
    title: "Manager extends Employee",
    prompt:
      "Define `Employee(name, salary)` with `pay()`. Define `Manager(Employee)` adding `bonus`. Override `pay()`. Read 3 lines. Print `<name> earns <pay> EUR`.",
    starter: "class Employee:\n    # TODO\n    pass\n\nclass Manager(Employee):\n    # TODO -- use super().__init__\n    pass\n",
    tests: [
      { stdin: "Mari\n1500\n300\n", expected: "Mari earns 1800 EUR" },
    ],
  },
  {
    id: "14.3",
    title: "Square is a Rectangle",
    prompt: "Define `Rectangle(w, h)` with `area()`. Define `Square(side)` inheriting from Rectangle. Read side, print area.",
    starter: "class Rectangle:\n    # TODO\n    pass\n\nclass Square(Rectangle):\n    # TODO\n    pass\n\nside = int(input())\n",
    tests: [
      { stdin: "5\n", expected: "25" },
      { stdin: "1\n", expected: "1" },
    ],
  },
  {
    id: "14.4",
    title: "Polymorphic payroll",
    prompt:
      "Read n. Then n lines: `emp <name> <salary>` or `mgr <name> <salary> <bonus>`. Print total payroll.",
    starter: "class Employee:\n    def __init__(self, name, salary):\n        self.name = name; self.salary = salary\n    def pay(self):\n        return self.salary\n\nclass Manager(Employee):\n    # TODO\n    pass\n\nn = int(input())\n",
    tests: [
      { stdin: "3\nemp Anna 1200\nmgr Mari 1500 300\nemp Jaan 1300\n", expected: "4300" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Ch 15 — Abstract classes
// ---------------------------------------------------------------------------
const CH15: Task[] = [
  {
    id: "15.1",
    title: "Shape hierarchy total area",
    prompt:
      "Define abstract `Shape` with abstract `area()`. Implement `Circle(r)`, `Rectangle(w,h)`, `Triangle(b,h)`. Read n then n lines (`circle r` / `rect w h` / `tri b h`). Print total area (2dp).",
    starter: "from abc import ABC, abstractmethod\nimport math\n\nclass Shape(ABC):\n    # TODO\n    pass\n\n# TODO Circle, Rectangle, Triangle\n\nn = int(input())\n",
    tests: [
      { stdin: "3\ncircle 2\nrect 3 4\ntri 5 6\n", expected: "39.57" },
    ],
  },
  {
    id: "15.4",
    title: "Force complete subclass",
    prompt:
      "Define abstract `Payment` with `charge` and `refund`. Define `CardPayment` missing `refund`. Try `CardPayment()` in try/except — print `incomplete subclass`. Then define `FullCardPayment` with both, instantiate it, print `ok`.",
    starter: "from abc import ABC, abstractmethod\n\nclass Payment(ABC):\n    # TODO\n    pass\n",
    tests: [
      { stdin: "", expected: "incomplete subclass\nok" },
    ],
  },
];

// ---------------------------------------------------------------------------

export const CHAPTER_TASKS: ChapterTasks[] = [
  { slug: "01_io_and_variables", tasks: CH1 },
  { slug: "02_numbers_and_math", tasks: CH2 },
  { slug: "03_strings", tasks: CH3 },
  { slug: "04_conditionals", tasks: CH4 },
  { slug: "05_loops", tasks: CH5 },
  { slug: "06_lists_and_tuples", tasks: CH6 },
  { slug: "07_dictionaries_and_sets", tasks: CH7 },
  { slug: "08_functions", tasks: CH8 },
  { slug: "09_files_and_text_processing", tasks: CH9 },
  { slug: "10_mock_exam", tasks: CH10 },
  { slug: "11_classes_and_objects", tasks: CH11 },
  { slug: "12_methods_and_dunders", tasks: CH12 },
  { slug: "13_properties_and_encapsulation", tasks: CH13 },
  { slug: "14_inheritance", tasks: CH14 },
  { slug: "15_abstract_classes", tasks: CH15 },
];

export function getTasksForChapter(slug: string): Task[] {
  return CHAPTER_TASKS.find((c) => c.slug === slug)?.tasks ?? [];
}
