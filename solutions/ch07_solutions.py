"""
Chapter 7 — reference solutions
"""

def task_7_1():
    text = input()
    counts = {}
    for w in text.split():
        counts[w] = counts.get(w, 0) + 1
    for w in sorted(counts):
        print(w, counts[w])


def task_7_2():
    s = input().lower()
    counts = {}
    for ch in s:
        if ch == " ":
            continue
        counts[ch] = counts.get(ch, 0) + 1
    if not counts:
        return
    # max count, then alphabetically earliest
    best = max(counts.items(), key=lambda kv: (-kv[1], kv[0]))
    print(best[0])


def task_7_3():
    a = set(map(int, input().split()))
    b = set(map(int, input().split()))
    common = sorted(a & b)
    print(*common)


def task_7_4():
    xs = input().split()
    print(len(set(xs)))
