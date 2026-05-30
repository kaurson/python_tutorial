# Chapter 13 — Encapsulation, getters & setters

## Why encapsulate

If you let anyone write `account.balance = -1_000_000`, you've lost control. **Encapsulation** means hiding attributes behind methods or properties so you can validate or compute them.

## Convention: underscore prefix

Python doesn't have real `private`. It uses a convention:

- `self.name`   → public, fair game.
- `self._name`  → "internal, please don't touch from outside."
- `self.__name` → name-mangled to `_ClassName__name`. Strong "leave it alone" signal.

Most code uses single underscore.

## Manual getter / setter (the Java way — works but unidiomatic)

```python
class Temperature:
    def __init__(self, celsius):
        self._c = celsius

    def get_celsius(self):
        return self._c

    def set_celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._c = value
```

It works, but in Python we prefer **properties** so the caller still writes `t.celsius` instead of `t.get_celsius()`.

## The Pythonic way — `@property`

```python
class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius           # uses the SETTER below

    @property
    def celsius(self):                   # GETTER
        return self._c

    @celsius.setter
    def celsius(self, value):            # SETTER with validation
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._c = value

    @property
    def fahrenheit(self):                # COMPUTED, read-only
        return self._c * 9 / 5 + 32

t = Temperature(20)
print(t.celsius)        # 20         (getter)
print(t.fahrenheit)     # 68.0       (computed)
t.celsius = 30          # setter runs, validation passes
# t.celsius = -300      # ValueError
# t.fahrenheit = 100    # AttributeError (no setter -> read-only)
```

Key points:

- The getter is decorated with `@property`. It looks like an attribute to the caller.
- The setter is decorated with `@<name>.setter`.
- A property with no setter is read-only — perfect for derived values like `fahrenheit` or `area`.

## Validation in `__init__`

A nice trick: `self.celsius = celsius` in `__init__` calls the setter, so validation runs even for the initial value.

## Worked example — Account with validated balance

```python
class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance     # uses setter

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, value):
        if value < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = value

    def deposit(self, amount):
        self.balance = self._balance + amount

    def withdraw(self, amount):
        self.balance = self._balance - amount   # setter blocks overdraft
```

## Exam-style tasks

> **T13.1 — Validated Temperature**
>
> Build the `Temperature` class above. Read a celsius value on the first line. If it's below `-273.15`, print `invalid`. Otherwise print `<c> C = <f> F` with `f` to 2 decimals.

> **T13.2 — Person age with property**
>
> Define `Person(name, age)`. `age` must be an integer in `[0, 150]`; if not, raise `ValueError`.
> Read name and age on two lines. Print `<name>, <age>` if valid, otherwise `invalid age`.

> **T13.3 — Circle (read-only properties)**
>
> Define `Circle(radius)`. Properties:
> - `radius` — settable, must be > 0
> - `area` — read-only, π·r²
> - `circumference` — read-only, 2·π·r
>
> Read a radius. Print three lines: the radius, area (2 decimals), circumference (2 decimals).
> If radius ≤ 0, print `invalid` instead.

> **T13.4 — Student.passed (computed)**
>
> Define `Student(name, grades)`. Add a read-only property `passed` which is `True` if average ≥ 60.
> Read `n`, then `n` lines `name g1 g2 ...`. Print, alphabetically by name, every student that **passed**, one per line as `name <avg with 1 dec>`.
