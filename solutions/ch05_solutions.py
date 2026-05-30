"""
Chapter 5 — reference solutions
"""

def task_5_1():
    total = 0
    while True:
        n = int(input())
        if n == 0:
            break
        if n < 0:
            continue
        total += n
    print(total)


def task_5_2():
    n = int(input())
    for i in range(n, 0, -1):
        print(i)
    print("Start!")


def task_5_3():
    n = int(input())
    for i in range(1, 11):
        print(f"{n} * {i} = {n * i}")


def task_5_4():
    n = int(input())
    s = 0
    while n > 0:
        s += n % 10
        n //= 10
    print(s)
