"""
Chapter 11 — reference solutions
"""


class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y


def task_11_1():
    x, y = map(int, input().split())
    p = Point(x, y)
    print(f"({p.x}, {p.y})")


class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height


def task_11_2():
    w, h = map(int, input().split())
    r = Rectangle(w, h)
    print(r.width * r.height, 2 * (r.width + r.height))


class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year


def task_11_3():
    title = input()
    author = input()
    year = int(input())
    b = Book(title, author, year)
    print(f"{b.title} by {b.author} ({b.year})")


class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance


def task_11_4():
    owner = input()
    try:
        line = input().strip()
    except EOFError:
        line = ""
    balance = int(line) if line else 0
    a = Account(owner, balance)
    print(f"Account of {a.owner}: {a.balance} EUR")
