"""
Mock exam — reference solutions
"""

import os
HERE = os.path.dirname(os.path.abspath(__file__))
NUMBERS = os.path.join(HERE, "..", "10_mock_exam", "numbers.txt")


# M1 — Palindrome (ignore case & spaces)
def m1():
    s = input()
    cleaned = "".join(s.lower().split())   # remove all whitespace, lower
    print("yes" if cleaned == cleaned[::-1] else "no")


# M2 — Caesar cipher
def m2():
    k = int(input())
    text = input()
    out = []
    for ch in text:
        if "a" <= ch <= "z":
            out.append(chr((ord(ch) - ord("a") + k) % 26 + ord("a")))
        elif "A" <= ch <= "Z":
            out.append(chr((ord(ch) - ord("A") + k) % 26 + ord("A")))
        else:
            out.append(ch)
    print("".join(out))


# M3 — min / max / median (1 decimal)
def m3():
    xs = sorted(map(int, input().split()))
    n = len(xs)
    if n % 2 == 1:
        median = float(xs[n // 2])
    else:
        median = (xs[n // 2 - 1] + xs[n // 2]) / 2
    print(xs[0])
    print(xs[-1])
    print(f"{median:.1f}")


# M4 — word: count, alphabetical
def m4():
    text = input()
    counts = {}
    for w in text.split():
        counts[w] = counts.get(w, 0) + 1
    for w in sorted(counts):
        print(f"{w}: {counts[w]}")


# M5 — right-aligned triangle of stars
def m5():
    n = int(input())
    for i in range(1, n + 1):
        print(" " * (n - i) + "*" * i)


# M6 — File analysis
def m6():
    with open(NUMBERS) as f:
        nums = [int(line) for line in f if line.strip()]
    print(f"sum={sum(nums)}")
    print(f"count={len(nums)}")
    print(f"even={sum(1 for x in nums if x % 2 == 0)}")


TASKS = {"1": m1, "2": m2, "3": m3, "4": m4, "5": m5, "6": m6}

if __name__ == "__main__":
    choice = input("Task number (1-6): ").strip()
    fn = TASKS.get(choice)
    if fn is None:
        print("Unknown task")
    else:
        fn()
