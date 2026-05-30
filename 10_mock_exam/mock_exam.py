"""
Mock exam — 6 tasks. See README.md for full descriptions.
Run:  python3 mock_exam.py   then pick a task number.
"""

import os
HERE = os.path.dirname(os.path.abspath(__file__))


# M1 — Palindrome (ignore case & spaces)
def m1():
    # TODO
    pass


# M2 — Caesar cipher
def m2():
    # TODO
    pass


# M3 — min / max / median
def m3():
    # TODO
    pass


# M4 — Word frequency "word: count" alphabetically
def m4():
    # TODO
    pass


# M5 — Right-aligned triangle of stars
def m5():
    # TODO
    pass


# M6 — File analysis: sum, count, even count
def m6():
    # TODO -- read os.path.join(HERE, "numbers.txt")
    pass


TASKS = {"1": m1, "2": m2, "3": m3, "4": m4, "5": m5, "6": m6}

if __name__ == "__main__":
    choice = input("Task number (1-6): ").strip()
    fn = TASKS.get(choice)
    if fn is None:
        print("Unknown task")
    else:
        fn()
