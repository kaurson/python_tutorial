# Chapter 1 — Input, output, variables

## Concept

A Python program reads data with `input()`, stores it in **variables**, and shows results with `print()`. Everything from `input()` is a **string**, even if the user types digits.

```python
name = input()          # name is a string, e.g. "Mari"
age_str = input()       # "17"
age = int(age_str)      # 17 (integer)
print("Hello,", name)   # Hello, Mari
```

## Types you'll meet on the exam

| Type    | Example      | Convert from string |
|---------|--------------|---------------------|
| `int`   | `42`         | `int("42")`         |
| `float` | `3.14`       | `float("3.14")`     |
| `str`   | `"hello"`    | already a string    |
| `bool`  | `True/False` | `bool(x)`           |

## Output formatting — f-strings

```python
a = 7
b = 3
print(f"{a} + {b} = {a + b}")   # 7 + 3 = 10
print(f"{a / b:.2f}")           # 2.33  (2 decimals)
```

The `:.2f` after `:` means "format as float with 2 decimals".

## Reading multiple values on one line

```python
# Input: "12 34 56"
a, b, c = input().split()        # all strings
a, b, c = int(a), int(b), int(c) # convert to int
# Shortcut:
a, b, c = map(int, input().split())
```

## Common pitfalls

- `input() + 1` raises `TypeError` — convert with `int()` first.
- `print()` adds a newline automatically. Use `end=""` to suppress it: `print(x, end="")`.
- `print(a, b)` separates with a space; use `sep=""` to remove it.

## Worked example

> Read two integers on separate lines. Print their sum.

```python
a = int(input())
b = int(input())
print(a + b)
```

## Exam-style task

> **T1.1 — Average of three**
>
> Read three numbers, one per line. Print their average rounded to **2 decimals**.
>
> **Input:**
> ```
> 4
> 5
> 6
> ```
> **Output:**
> ```
> 5.00
> ```

> **T1.2 — Greeting**
>
> Read a name on the first line and a year of birth on the second. Print the line:
> `Tere, <name>! You will turn <age> in 2026.`

Open `exercises.py` and try them.
