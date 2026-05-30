"""
Chapter 15 — Abstract base classes & polymorphism
"""

from abc import ABC, abstractmethod
import math


# T15.1 — Shape hierarchy: Circle, Rectangle, Triangle. Sum of areas.
class Shape(ABC):
    # TODO -- abstract area(), abstract perimeter()
    pass


class Circle(Shape):
    # TODO
    pass


class Rectangle(Shape):
    # TODO
    pass


class Triangle(Shape):
    # TODO -- area = base*height/2; perimeter -> 0
    pass


def task_15_1():
    # TODO
    pass


# T15.2 — Abstract Animal with concrete Dog/Cat/Cow
class Animal(ABC):
    # TODO
    pass


class Dog(Animal):
    # TODO
    pass


class Cat(Animal):
    # TODO
    pass


class Cow(Animal):
    # TODO
    pass


def task_15_2():
    # TODO -- skip unknown species
    pass


# T15.3 — Catch abstract instantiation
def task_15_3():
    # TODO -- define a Shape-like abstract class, try Shape(), catch TypeError
    pass


# T15.4 — Force a subclass to implement everything
class Payment(ABC):
    # TODO -- abstract charge(amount), refund(amount)
    pass


def task_15_4():
    # TODO
    pass


if __name__ == "__main__":
    task_15_1()
    # task_15_2()
    # task_15_3()
    # task_15_4()
