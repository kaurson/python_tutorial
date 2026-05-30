"""
Chapter 4 — reference solutions
"""

def task_4_1():
    y = int(input())
    leap = (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)
    print("leap" if leap else "not leap")


def task_4_2():
    s = int(input())
    if s < 0 or s > 100:
        print("invalid")
    elif s >= 90:
        print("A")
    elif s >= 80:
        print("B")
    elif s >= 70:
        print("C")
    elif s >= 60:
        print("D")
    else:
        print("F")


def task_4_3():
    a, b, c = sorted(map(int, input().split()))
    if a + b <= c:
        print("not a triangle")
    elif a == b == c:
        print("equilateral")
    elif a == b or b == c:
        print("isosceles")
    else:
        print("scalene")


def task_4_4():
    n = int(input())
    if n == 0:
        print("zero")
    else:
        sign = "positive" if n > 0 else "negative"
        parity = "even" if n % 2 == 0 else "odd"
        print(f"{sign} {parity}")
