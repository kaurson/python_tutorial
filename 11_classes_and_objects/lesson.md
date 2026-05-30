# Chapter 11 — Classes & objects

## What a class is

A **class** is a blueprint. An **object** (or "instance") is a thing built from that blueprint.

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

rex = Dog("Rex", 5)        # create an instance
print(rex.name)            # Rex
print(rex.age)             # 5
```

Reading this line by line:

- `class Dog:` starts the blueprint.
- `__init__` is the **constructor** — it runs automatically when you create an instance.
- `self` is the instance being built. You assign data into it: `self.name = name`.
- `rex = Dog("Rex", 5)` calls `__init__`. Python passes the new object as `self` for you.
- `rex.name` reads an attribute off the instance.

## Class vs instance attribute

```python
class Dog:
    species = "Canis familiaris"   # CLASS attribute — shared by all dogs

    def __init__(self, name):
        self.name = name           # INSTANCE attribute — unique per dog

rex = Dog("Rex")
muri = Dog("Muri")
print(rex.species, muri.species)   # both: "Canis familiaris"
print(rex.name, muri.name)         # "Rex" "Muri"
```

Rule of thumb: data that differs per object → instance attribute (in `__init__`). Data that's the same for every object → class attribute.

## Default values in `__init__`

```python
class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

p1 = Point()           # (0, 0)
p2 = Point(3, 4)       # (3, 4)
p3 = Point(y=5)        # (0, 5)
```

## Modifying an attribute

```python
rex.age = 6            # just assign — Python lets you
```

(In Chapter 13 we'll learn how to control this with properties.)

## Worked example — a Student class

```python
class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades       # a list of ints

    # we'll add methods in the next chapter
```

Using it:

```python
mari = Student("Mari", [85, 92, 78])
print(mari.name)            # Mari
print(sum(mari.grades) / len(mari.grades))   # 85.0
```

## Exam-style tasks

> **T11.1 — Point**
>
> Define a class `Point` with attributes `x`, `y` (defaults 0). Read two integers `x y` on one line, create a `Point`, and print it as `(x, y)`.

> **T11.2 — Rectangle**
>
> Define a class `Rectangle` with attributes `width`, `height`. Read `w h` on one line, create a `Rectangle`, and print its area and perimeter on one line separated by a space. (Just compute with `self.width * self.height` etc. — methods come next chapter.)

> **T11.3 — Book inventory**
>
> Define a class `Book` with `title`, `author`, `year`. Read 3 lines (title, author, year), create a book, and print: `<title> by <author> (<year>)`.

> **T11.4 — Bank account (constructor + default)**
>
> Define a class `Account` with `owner` and `balance` (default `0`). Read the owner name on the first line and an optional second line that is either empty (default balance 0) or a number (starting balance). Print: `Account of <owner>: <balance> EUR`.
