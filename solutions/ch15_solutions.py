"""
Chapter 15 — reference solutions
"""

from abc import ABC, abstractmethod
import math


class Shape(ABC):
    @abstractmethod
    def area(self): ...

    @abstractmethod
    def perimeter(self): ...


class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return math.pi * self.r ** 2

    def perimeter(self):
        return 2 * math.pi * self.r


class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h

    def area(self):
        return self.w * self.h

    def perimeter(self):
        return 2 * (self.w + self.h)


class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height / 2

    def perimeter(self):
        return 0  # not required by the task


def task_15_1():
    n = int(input())
    total = 0.0
    for _ in range(n):
        parts = input().split()
        kind = parts[0]
        if kind == "circle":
            total += Circle(float(parts[1])).area()
        elif kind == "rect":
            total += Rectangle(float(parts[1]), float(parts[2])).area()
        elif kind == "tri":
            total += Triangle(float(parts[1]), float(parts[2])).area()
    print(f"{total:.2f}")


class Animal(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def speak(self): ...


class Dog(Animal):
    def speak(self):
        return "Auh"


class Cat(Animal):
    def speak(self):
        return "Näu"


class Cow(Animal):
    def speak(self):
        return "Muu"


def task_15_2():
    n = int(input())
    species_map = {"dog": Dog, "cat": Cat, "cow": Cow}
    for _ in range(n):
        kind, name = input().split(maxsplit=1)
        cls = species_map.get(kind)
        if cls is None:
            continue
        a = cls(name)
        print(f"{a.name}: {a.speak()}")


def task_15_3():
    class S(ABC):
        @abstractmethod
        def foo(self): ...

    try:
        S()
        print("(should not get here)")
    except TypeError:
        print("cannot instantiate abstract class")


class Payment(ABC):
    @abstractmethod
    def charge(self, amount): ...

    @abstractmethod
    def refund(self, amount): ...


class CardPayment(Payment):
    def charge(self, amount):
        return amount
    # refund deliberately missing


class FullCardPayment(Payment):
    def charge(self, amount):
        return amount

    def refund(self, amount):
        return -amount


def task_15_4():
    try:
        CardPayment()
        print("(should not get here)")
    except TypeError:
        print("incomplete subclass")

    FullCardPayment()
    print("ok")
