# Chapter 8 — Functions

## Defining and calling

```python
def square(x):
    return x * x

square(5)        # 25
```

The body is indented. `return` sends a value back. Without `return`, a function returns `None`.

## Parameters and default values

```python
def greet(name, greeting="Tere"):
    return f"{greeting}, {name}!"

greet("Mari")                 # "Tere, Mari!"
greet("Mari", "Hello")        # "Hello, Mari!"
greet(name="Mari")            # keyword argument
```

## Returning multiple values

```python
def min_max(xs):
    return min(xs), max(xs)   # tuple

lo, hi = min_max([3, 1, 4])    # 1, 4
```

## Scope

Variables defined inside a function are **local**. They don't exist outside.

```python
def f():
    x = 10
    return x

f()        # 10
print(x)   # NameError
```

## Don't print *and* return — pick one

For testable functions, prefer `return`. Print in the calling code.

```python
def double(x):
    return 2 * x         # good

def double_bad(x):
    print(2 * x)         # harder to test, can't reuse the value
```

## Simple recursion

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

factorial(5)    # 120
```

Always have a **base case** that doesn't recurse, otherwise you get `RecursionError`.

## Worked example — is_prime

```python
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    return True
```

## Exam-style tasks

> **T8.1 — is_prime + range**
>
> Write `is_prime(n)`. Then read two integers `a b` on one line and print all primes in `[a, b]` separated by spaces. Print an empty line if none.
>
> Input `10 20` → `11 13 17 19`

> **T8.2 — Reverse digits**
>
> Write `reverse_number(n)` returning the integer with its digits reversed.
> Read an integer and print `reverse_number(n)`.
>
> Input `1730` → `0371` is wrong — leading zeros drop. Output: `371`.

> **T8.3 — GCD by Euclid**
>
> Write `gcd(a, b)` using the Euclidean algorithm (recursive or iterative). Read two integers on one line and print their GCD.
>
> Input `48 18` → `6`

> **T8.4 — Count words (function)**
>
> Write `word_count(s)` that returns the number of words in `s` (whitespace-separated).
> Read a line and print `word_count(line)`.
