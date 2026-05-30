# Chapter 4 — Conditionals

## `if / elif / else`

```python
n = int(input())
if n > 0:
    print("positive")
elif n < 0:
    print("negative")
else:
    print("zero")
```

Only one branch runs. The conditions are checked top to bottom.

## Comparison operators

`==`  `!=`  `<`  `<=`  `>`  `>=`

> **Watch out:** `=` assigns, `==` compares.

## Boolean logic

```python
a and b   # both must be true
a or b    # at least one true
not a     # flip
```

Python short-circuits: `a and b` doesn't evaluate `b` if `a` is false.

## Chained comparisons

```python
if 0 <= score <= 100:   # same as (0 <= score) and (score <= 100)
    ...
```

## "Truthy" and "falsy"

These count as **False** in an `if`:

- `0`, `0.0`
- `""` (empty string)
- `[]`, `()`, `{}` (empty containers)
- `None`
- `False`

Everything else is True. So `if name:` means "if name is not empty".

## Worked example — leap year

```python
y = int(input())
if y % 400 == 0:
    print("leap")
elif y % 100 == 0:
    print("not leap")
elif y % 4 == 0:
    print("leap")
else:
    print("not leap")
```

Rule: divisible by 4, **except** centuries unless also divisible by 400. 2000 is leap; 1900 is not.

## Exam-style tasks

> **T4.1 — Leap year**
>
> Read a year. Print `leap` if it is a leap year, otherwise `not leap`.

> **T4.2 — Grade letter**
>
> Read a score 0–100. Print the letter grade:
> 90–100 → A, 80–89 → B, 70–79 → C, 60–69 → D, 0–59 → F.
> If the score is outside 0–100, print `invalid`.

> **T4.3 — Triangle type**
>
> Read three positive integers — side lengths — on one line.
> Print `equilateral` (all equal), `isosceles` (exactly two equal), `scalene` (all different),
> or `not a triangle` if the triangle inequality fails (any side ≥ sum of the other two).

> **T4.4 — Even or odd, positive or negative**
>
> Read an integer. Print one of:
> `positive even`, `positive odd`, `negative even`, `negative odd`, or `zero`.
