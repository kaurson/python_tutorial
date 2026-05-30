# Chapter 15 — Abstract base classes & polymorphism

## The motivation

You've designed a `Shape` parent class. Every shape **must** be able to compute its `area()`. But there's no sensible `area()` you can write for a generic Shape — only concrete shapes (Circle, Rectangle, Triangle) know how.

You want two guarantees:

1. Nobody can accidentally create a plain `Shape()` object.
2. Every subclass is forced to implement `area()`, or Python complains immediately.

That's what **abstract base classes** give you.

## The `abc` module

```python
from abc import ABC, abstractmethod

class Shape(ABC):                       # ABC = "abstract base class"
    @abstractmethod
    def area(self):
        ...                             # no implementation

    def describe(self):                 # concrete method, inherited
        return f"This shape has area {self.area():.2f}"
```

Now:

```python
s = Shape()        # TypeError: Can't instantiate abstract class Shape
```

You must subclass and implement every `@abstractmethod`:

```python
import math

class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return math.pi * self.r ** 2

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h


c = Circle(3)
print(c.area())          # 28.274…
print(c.describe())      # uses concrete method from Shape
```

If you forget to implement `area()` in a subclass, Python raises `TypeError` the moment you try to instantiate that subclass — not deep inside your program later.

## Multiple abstract methods

```python
class Animal(ABC):
    @abstractmethod
    def speak(self): ...

    @abstractmethod
    def move(self): ...

class Dog(Animal):
    def speak(self): return "Auh"
    def move(self):  return "run"
```

## Why this matters in practice

Abstract classes let you write code that works on **any** subclass:

```python
def total_area(shapes):
    return sum(s.area() for s in shapes)

shapes = [Circle(1), Rectangle(2, 3), Circle(5)]
print(total_area(shapes))
```

`total_area` doesn't care what types are in the list — it only requires each item to have an `area()` method. The abstract class gives you the contract.

## Duck typing — Python's looser version

Python is famous for "duck typing": if it walks like a duck and quacks like a duck, treat it as a duck. You don't *have* to use `ABC`. Any object with the right method works. But ABCs make the contract **explicit** and catch mistakes early — preferred for larger programs.

## Worked example — Shape hierarchy

```python
from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self): ...
    @abstractmethod
    def perimeter(self): ...

    def __str__(self):
        return f"{type(self).__name__}: area={self.area():.2f}, perim={self.perimeter():.2f}"


class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):       return math.pi * self.r ** 2
    def perimeter(self):  return 2 * math.pi * self.r


class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):       return self.w * self.h
    def perimeter(self):  return 2 * (self.w + self.h)


for s in [Circle(2), Rectangle(3, 4)]:
    print(s)
```

`type(self).__name__` gives the subclass name (`"Circle"` or `"Rectangle"`).

## Exam-style tasks

> **T15.1 — Shape hierarchy**
>
> Build the abstract `Shape` and concrete `Circle(r)`, `Rectangle(w, h)`, `Triangle(base, height)` (`area = base * height / 2`, perimeter is **not** required — make it return `0`).
> Read `n`. Then read `n` lines, each of:
> - `circle r`
> - `rect w h`
> - `tri b h`
>
> Print the **total area** with 2 decimals.

> **T15.2 — Animal abstract base**
>
> Define abstract `Animal(name)` with abstract `speak()`. Define `Dog`, `Cat`, `Cow` with their sounds (`Auh`, `Näu`, `Muu`). Reading `n` then `n` lines `<species> <name>`, print each one as `<name>: <sound>`. If species is unknown, skip it.

> **T15.3 — Catch the instantiation error**
>
> Try this in a Python file: define `Shape(ABC)` with one abstract method and then run `Shape()`. Wrap it in `try/except TypeError` and print `cannot instantiate abstract class`.
> (This is a conceptual task — there's no input.)

> **T15.4 — Force a subclass**
>
> Define `Payment(ABC)` with abstract methods `charge(amount)` and `refund(amount)`.
> Define `CardPayment` that **only** implements `charge` (forgets `refund`). Try to instantiate it inside `try/except TypeError` and print `incomplete subclass`.
> Then define `FullCardPayment` implementing both, instantiate it successfully and print `ok`.
