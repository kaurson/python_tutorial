# Mock exam — 90 minutes

Six tasks, mixed difficulty, in the style of an Estonian university CS entrance test.

Rules:
- No internet, no AI help.
- Open `mock_exam.py` and complete each function.
- Run with `python3 mock_exam.py` and pick the task from the menu.
- When done, compare with `solutions/mock_exam_solutions.py`.

## Tasks

> **M1 — Palindrome (10 pts)**
> Read a string. Print `yes` if it's a palindrome (ignoring case and spaces), otherwise `no`.
> `Saippuakauppias` → `yes`. `Mari` → `no`.

> **M2 — Caesar cipher (15 pts)**
> Read a key `k` on the first line and a line of text on the second.
> Shift every English letter forward by `k` positions, wrapping within its case (`a..z` and `A..Z`). Leave everything else as-is. Print the result.
> Input:
> ```
> 3
> Hello, World!
> ```
> Output: `Khoor, Zruog!`

> **M3 — Statistics (15 pts)**
> Read space-separated integers. Print three lines: `min`, `max`, and `median` (1 decimal).
> Median = middle of sorted list; if even count, average of two middles.

> **M4 — Word counter (15 pts)**
> Read a line of text. Print, alphabetically, every unique word together with its frequency, in the format `word: count` — one per line.

> **M5 — Triangle of stars (15 pts)**
> Read `n`. Print a right-aligned triangle of stars of height `n`. Example `n = 4`:
> ```
>    *
>   **
>  ***
> ****
> ```

> **M6 — File analysis (30 pts)**
> Read the file `numbers.txt` in this folder (one integer per line). Print three lines:
> - `sum=<sum>`
> - `count=<count>`
> - `even=<how many are even>`
