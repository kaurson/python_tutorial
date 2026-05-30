"""
Chapter 6 — reference solutions
"""

def task_6_1():
    xs = list(map(int, input().split()))
    xs.sort(reverse=True)
    print(*xs)


def task_6_2():
    xs = list(map(int, input().split()))
    unique = sorted(set(xs), reverse=True)
    if len(unique) < 2:
        print("none")
    else:
        print(unique[1])


def task_6_3():
    xs = list(map(int, input().split()))
    avg = sum(xs) / len(xs)
    print(f"{avg:.2f}")
    above = [x for x in xs if x > avg]
    print(*above)


def task_6_4():
    xs = list(map(int, input().split()))
    out = []
    for i in range(len(xs) - 1, -1, -1):
        out.append(xs[i])
    print(*out)
