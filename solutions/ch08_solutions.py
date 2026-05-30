"""
Chapter 8 — reference solutions
"""

def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    return True


def task_8_1():
    a, b = map(int, input().split())
    primes = [str(n) for n in range(a, b + 1) if is_prime(n)]
    print(" ".join(primes))


def reverse_number(n):
    r = 0
    n = abs(n)
    while n > 0:
        r = r * 10 + n % 10
        n //= 10
    return r


def task_8_2():
    n = int(input())
    print(reverse_number(n))


def gcd(a, b):
    a, b = abs(a), abs(b)
    while b:
        a, b = b, a % b
    return a


def task_8_3():
    a, b = map(int, input().split())
    print(gcd(a, b))


def word_count(s):
    return len(s.split())


def task_8_4():
    print(word_count(input()))
