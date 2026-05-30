"""
Chapter 13 — reference solutions
"""

import math


class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    @property
    def celsius(self):
        return self._c

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("below absolute zero")
        self._c = value

    @property
    def fahrenheit(self):
        return self._c * 9 / 5 + 32


def task_13_1():
    try:
        c = float(input())
        t = Temperature(c)
        print(f"{t.celsius} C = {t.fahrenheit:.2f} F")
    except ValueError:
        print("invalid")


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if not isinstance(value, int) or value < 0 or value > 150:
            raise ValueError("bad age")
        self._age = value


def task_13_2():
    name = input()
    try:
        age = int(input())
        p = Person(name, age)
        print(f"{p.name}, {p.age}")
    except ValueError:
        print("invalid age")


class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def radius(self):
        return self._r

    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("radius must be positive")
        self._r = value

    @property
    def area(self):
        return math.pi * self._r ** 2

    @property
    def circumference(self):
        return 2 * math.pi * self._r


def task_13_3():
    try:
        r = float(input())
        c = Circle(r)
        print(c.radius)
        print(f"{c.area:.2f}")
        print(f"{c.circumference:.2f}")
    except ValueError:
        print("invalid")


class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades

    @property
    def average(self):
        return sum(self.grades) / len(self.grades) if self.grades else 0

    @property
    def passed(self):
        return self.average >= 60


def task_13_4():
    n = int(input())
    students = []
    for _ in range(n):
        parts = input().split()
        name = parts[0]
        grades = list(map(int, parts[1:]))
        students.append(Student(name, grades))
    passed = sorted((s for s in students if s.passed), key=lambda s: s.name)
    for s in passed:
        print(f"{s.name} {s.average:.1f}")
