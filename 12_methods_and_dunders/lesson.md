# Chapter 12 — Methods & "dunder" methods

A **method** is a function defined inside a class. Its first parameter is `self` — the instance it's being called on.

## A class with methods

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print(f"{self.name} says Auh!")

    def human_age(self):
        return self.age * 7

rex = Dog("Rex", 5)
rex.bark()              # "Rex says Auh!"
print(rex.human_age())  # 35
```

When you write `rex.bark()`, Python silently calls `Dog.bark(rex)` — `rex` becomes `self`.

## Methods can change the instance

```python
class Counter:
    def __init__(self):
        self.value = 0

    def increment(self):
        self.value += 1

    def reset(self):
        self.value = 0

c = Counter()
c.increment(); c.increment(); c.increment()
print(c.value)        # 3
```

## "Dunder" methods (double-underscore)

Special methods Python calls for you when certain syntax is used.

| Dunder        | When it's called                       | Returns |
|---------------|----------------------------------------|---------|
| `__init__`    | `Dog("Rex", 5)` (object creation)      | nothing |
| `__str__`     | `str(obj)` or `print(obj)`             | string  |
| `__repr__`    | `repr(obj)` or showing in REPL         | string  |
| `__eq__`      | `a == b`                               | bool    |
| `__lt__`      | `a < b` (lets `sorted()` work)         | bool    |
| `__len__`     | `len(obj)`                             | int     |

Example:

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(3, 4)
p2 = Point(3, 4)
print(p1)              # "(3, 4)"  — __str__ used
print(p1 == p2)        # True       — __eq__ used
```

Without `__str__`, `print(p1)` shows something ugly like `<__main__.Point object at 0x10b…>`.

## Worked example — Student with `average`

```python
class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades

    def average(self):
        if not self.grades:
            return 0.0
        return sum(self.grades) / len(self.grades)

    def __str__(self):
        return f"{self.name}: {self.average():.2f}"

mari = Student("Mari", [85, 92, 78])
print(mari)           # "Mari: 85.00"
```

## Exam-style tasks

> **T12.1 — Rectangle methods**
>
> Define `Rectangle(width, height)` with methods `area()` and `perimeter()`, and `__str__` returning `Rectangle <w>x<h>`. Read `w h`, build it, and print three lines:
> ```
> Rectangle 4x5
> 20
> 18
> ```

> **T12.2 — BankAccount methods**
>
> Define `Account(owner, balance=0)` with methods:
> - `deposit(amount)` — add to balance, return new balance
> - `withdraw(amount)` — subtract if enough money, else print `insufficient` and don't change balance
> - `__str__` returns `<owner>: <balance> EUR`
>
> Read 3 lines: owner, deposit amount, withdraw amount. Print the account after each operation.

> **T12.3 — Sort students by average**
>
> Define `Student(name, grades)` with `average()` and `__lt__` that compares by **descending average** (so `sorted()` puts the best student first).
>
> Read `n` on the first line, then `n` lines each formatted `name g1 g2 g3 ...`. Print students sorted, one per line as `name avg` with 1 decimal.

> **T12.4 — Point distance**
>
> Define `Point(x, y)` with a method `distance_to(other)` returning the Euclidean distance. Read two points on two lines (each `x y`). Print the distance with 2 decimals.
