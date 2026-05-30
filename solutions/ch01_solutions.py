"""
Chapter 1 — reference solutions
"""

def task_1_1():
    a = float(input())
    b = float(input())
    c = float(input())
    avg = (a + b + c) / 3
    print(f"{avg:.2f}")


def task_1_2():
    name = input()
    year = int(input())
    age = 2026 - year
    print(f"Tere, {name}! You will turn {age} in 2026.")


def task_1_3():
    a, b = input().split()
    print(b, a)
