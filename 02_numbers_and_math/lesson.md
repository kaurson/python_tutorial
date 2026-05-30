# Chapter 2 — Numbers & arithmetic

## Operators

| Op  | Meaning            | Example          |
|-----|--------------------|------------------|
| `+` | add                | `2 + 3 → 5`      |
| `-` | subtract           | `5 - 2 → 3`      |
| `*` | multiply           | `4 * 3 → 12`     |
| `/` | float division     | `7 / 2 → 3.5`    |
| `//`| integer division   | `7 // 2 → 3`     |
| `%` | modulo (remainder) | `7 % 2 → 1`      |
| `**`| power              | `2 ** 10 → 1024` |

The pair `//` and `%` show up constantly: "split this amount into euros and cents", "is this number divisible by 3", "what's the last digit".

## Useful built-ins

```python
abs(-7)        # 7
round(3.456, 2) # 3.46
min(4, 9, 1)   # 1
max(4, 9, 1)   # 9
sum([1, 2, 3]) # 6
pow(2, 10)     # 1024
divmod(17, 5)  # (3, 2)  -> quotient, remainder
```

## Integers vs floats

```python
5 / 2     # 2.5   (always float)
5 // 2    # 2     (int if both operands int)
5.0 // 2  # 2.0   (float)
int(3.9)  # 3     (truncates, NOT rounds)
round(3.5)# 4     (banker's rounding for ties, but usually fine)
```

## Worked example — split cents into € and ct

```python
total = int(input())      # e.g. 523
eur = total // 100        # 5
ct  = total % 100         # 23
print(f"{eur} € {ct} ct") # "5 € 23 ct"
```

## Exam-style tasks

> **T2.1 — Cents to euros**
>
> Read an integer amount in cents. Print it as `<eur> € <ct> ct`.
>
> Input `523` → Output `5 € 23 ct`
> Input `7`   → Output `0 € 7 ct`

> **T2.2 — Last digit**
>
> Read an integer (could be negative). Print its last (unit) digit.
>
> Input `12345` → `5`
> Input `-87`   → `7`

> **T2.3 — Rectangle stats**
>
> Read two positive integers (width and height of a rectangle) on one line.
> Print its area and perimeter separated by a space.
>
> Input `4 5` → `20 18`

> **T2.4 — Hours and minutes**
>
> Read a number of minutes. Print it as `H:MM`.
>
> Input `135` → `2:15`
> Input `8`   → `0:08`
