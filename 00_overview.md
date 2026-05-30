# Python 3 Refresher — University Entrance Exam Prep

A 10-chapter refresher of Python basics, with exam-style tasks in the style of Estonian university CS entrance tests (University of Tartu / TalTech).

## How to use this tutorial

1. Read the `lesson.md` in each chapter folder.
2. Open `exercises.py` and complete the `# TODO` tasks.
3. Run your file: `python3 exercises.py`
4. Compare your answer with the matching file in `solutions/`.
5. After Chapter 9, take the **Mock exam** in `10_mock_exam/` under time pressure (≈ 90 min).

## Chapter list

| # | Topic | Focus |
|---|---|---|
| 1 | Input, output, variables | `input()`, `print()`, type conversion, f-strings |
| 2 | Numbers & math | `+ - * / // %`, rounding, `min/max` |
| 3 | Strings | indexing, slicing, methods, iteration |
| 4 | Conditionals | `if / elif / else`, boolean logic |
| 5 | Loops | `for`, `while`, `range`, `break`, `continue` |
| 6 | Lists & tuples | indexing, sorting, comprehensions, unpacking |
| 7 | Dictionaries & sets | counting, lookups, set operations |
| 8 | Functions | `def`, `return`, parameters, recursion |
| 9 | Files & text processing | `open`, `with`, parsing lines |
| 10 | Mock exam | 6 mixed exam-style problems |
| 11 | Classes & objects | `class`, `__init__`, attributes, instances |
| 12 | Methods & dunder methods | `self`, `__str__`, `__eq__`, `__lt__` |
| 13 | Encapsulation, getters/setters | `_name`, `@property`, validation |
| 14 | Inheritance & extending classes | subclasses, `super()`, overriding |
| 15 | Abstract classes & polymorphism | `ABC`, `@abstractmethod`, duck typing |

## Exam survival tips

- **Read the task twice.** Most lost points come from misreading what the input looks like or what the output should be.
- **Print exactly what is asked.** Extra prompts like `"Enter a number:"` will fail automated graders. Use plain `input()`.
- **Watch integer vs float.** `5 / 2` is `2.5`; `5 // 2` is `2`. Estonian tasks often use both.
- **Estonian letters count too.** Vowels include `õ ä ö ü`, consonants include `š ž`. Account for them in string tasks.
- **Test edge cases.** Empty input, single element, all-equal values, very large numbers.
- **Use `with open(...)` for files.** It closes automatically.

Good luck!
