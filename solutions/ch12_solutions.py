"""
Chapter 12 — reference solutions
"""

import math


class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def __str__(self):
        return f"Rectangle {self.width}x{self.height}"


def task_12_1():
    w, h = map(int, input().split())
    r = Rectangle(w, h)
    print(r)
    print(r.area())
    print(r.perimeter())


class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            print("insufficient")
            return
        self.balance -= amount
        return self.balance

    def __str__(self):
        return f"{self.owner}: {self.balance} EUR"


def task_12_2():
    owner = input()
    d = int(input())
    w = int(input())
    acc = Account(owner)
    acc.deposit(d)
    print(acc)
    acc.withdraw(w)
    print(acc)


class Student:
    def __init__(self, name, grades):
        self.name = name
        self.grades = grades

    def average(self):
        return sum(self.grades) / len(self.grades) if self.grades else 0

    def __lt__(self, other):
        # descending by average
        return self.average() > other.average()


def task_12_3():
    n = int(input())
    students = []
    for _ in range(n):
        parts = input().split()
        name = parts[0]
        grades = list(map(int, parts[1:]))
        students.append(Student(name, grades))
    for s in sorted(students):
        print(f"{s.name} {s.average():.1f}")


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def distance_to(self, other):
        return math.sqrt((self.x - other.x) ** 2 + (self.y - other.y) ** 2)


def task_12_4():
    x1, y1 = map(float, input().split())
    x2, y2 = map(float, input().split())
    p1, p2 = Point(x1, y1), Point(x2, y2)
    print(f"{p1.distance_to(p2):.2f}")
