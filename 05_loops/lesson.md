# Chapter 5 — Loops

## `for` loop with `range`

```python
for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):     # 1..5
    print(i)

for i in range(10, 0, -2):# 10, 8, 6, 4, 2
    print(i)
```

`range(a, b)` stops **before** `b`.

## `for` loop over a collection

```python
for ch in "abc":
    print(ch)

for x in [10, 20, 30]:
    print(x)

for i, x in enumerate(["a", "b", "c"]):
    print(i, x)           # 0 a / 1 b / 2 c
```

## `while` loop

```python
n = int(input())
while n != 0:
    print(n)
    n = int(input())
```

Use `while` when you don't know how many iterations in advance.

## `break` and `continue`

```python
for x in range(100):
    if x == 7:
        break        # exit the loop entirely
    if x % 2 == 0:
        continue     # skip to next iteration
    print(x)         # only odd numbers below 7
```

## The accumulator pattern

```python
total = 0
count = 0
for line in lines:
    n = int(line)
    total += n
    count += 1
print(total / count)
```

## Nested loops

```python
# Multiplication table 1..5
for i in range(1, 6):
    for j in range(1, 6):
        print(i * j, end="\t")
    print()
```

## Worked example — read until 0

```python
total = 0
while True:
    n = int(input())
    if n == 0:
        break
    if n < 0:
        continue          # skip negatives
    total += n
print(total)
```

## Exam-style tasks

> **T5.1 — Sum until zero**
>
> Read integers one per line until `0`. Skip negatives. Print the sum of the positive ones.

> **T5.2 — Count down**
>
> Read a positive integer `n`. Print numbers from `n` down to `1`, one per line, then `Start!` on the last line.
>
> Input `3` →
> ```
> 3
> 2
> 1
> Start!
> ```

> **T5.3 — Multiplication table**
>
> Read an integer `n` (1–9). Print the multiplication table of `n` from 1 to 10, like:
> ```
> n * 1 = n
> n * 2 = 2n
> ...
> ```

> **T5.4 — Digit sum**
>
> Read a non-negative integer. Print the sum of its digits.
>
> Input `1729` → `19`
> (Use a `while` loop with `% 10` and `// 10`. Don't convert to string.)
