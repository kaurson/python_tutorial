"""
Chapter 2 — reference solutions
"""

def task_2_1():
    total = int(input())
    eur, ct = total // 100, total % 100
    print(f"{eur} € {ct} ct")


def task_2_2():
    n = int(input())
    print(abs(n) % 10)


def task_2_3():
    w, h = map(int, input().split())
    print(w * h, 2 * (w + h))


def task_2_4():
    m = int(input())
    h, mm = m // 60, m % 60
    print(f"{h}:{mm:02d}")
