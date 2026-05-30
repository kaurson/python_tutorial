"""
Chapter 3 — reference solutions
"""

VOWELS = set("aeiouõäöüAEIOUÕÄÖÜ")


def task_3_1():
    s = input()
    print(sum(1 for ch in s if ch in VOWELS))


def task_3_2():
    print(input()[::-1])


def task_3_3():
    words = input().split()
    print("".join(w[0].upper() + "." for w in words))


def task_3_4():
    sentence = input()
    word = input()
    masked = "*" * len(word)
    print(sentence.replace(word, masked))
