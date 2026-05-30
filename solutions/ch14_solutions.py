"""
Chapter 14 — reference solutions
"""


class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"


class Dog(Animal):
    def speak(self):
        return f"{self.name} says Auh!"


class Cat(Animal):
    def speak(self):
        return f"{self.name} says Näu!"


def task_14_1():
    n = int(input())
    for _ in range(n):
        kind, name = input().split(maxsplit=1)
        if kind == "dog":
            a = Dog(name)
        elif kind == "cat":
            a = Cat(name)
        else:
            a = Animal(name)
        print(a.speak())


class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def pay(self):
        return self.salary


class Manager(Employee):
    def __init__(self, name, salary, bonus):
        super().__init__(name, salary)
        self.bonus = bonus

    def pay(self):
        return super().pay() + self.bonus


def task_14_2():
    name = input()
    salary = int(input())
    bonus = int(input())
    m = Manager(name, salary, bonus)
    print(f"{m.name} earns {m.pay()} EUR")


class Rectangle:
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)


def task_14_3():
    s = int(input())
    sq = Square(s)
    print(sq.area())


def task_14_4():
    n = int(input())
    total = 0
    for _ in range(n):
        parts = input().split()
        kind = parts[0]
        if kind == "emp":
            name, salary = parts[1], int(parts[2])
            total += Employee(name, salary).pay()
        elif kind == "mgr":
            name, salary, bonus = parts[1], int(parts[2]), int(parts[3])
            total += Manager(name, salary, bonus).pay()
    print(total)
