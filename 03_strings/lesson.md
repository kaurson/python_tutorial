# Chapter 3 — Strings

## What a string is

A `str` is an immutable sequence of characters. You can index, slice and iterate it like a list, but you cannot change a character in place.

```python
s = "Tartu"
s[0]      # 'T'
s[-1]     # 'u'   (last char)
len(s)    # 5
s[1:4]    # 'art'  (from index 1 up to but not including 4)
s[:2]     # 'Ta'
s[2:]     # 'rtu'
s[::-1]   # 'utraT' (reversed)
```

## The methods you'll actually use on the exam

```python
s.lower()           # "tartu"
s.upper()           # "TARTU"
s.strip()           # remove leading/trailing whitespace
s.replace("a", "A") # "TArtu"
s.split()           # split on whitespace -> list
"a,b,c".split(",")  # ['a', 'b', 'c']
" ".join(["a","b"]) # "a b"
s.startswith("T")   # True
s.endswith("u")     # True
s.find("rt")        # 2  (or -1 if not found)
s.count("t")        # 1  (case-sensitive!)
"7".isdigit()       # True
"abc".isalpha()     # True
```

## Iterating over a string

```python
for ch in "abc":
    print(ch)
```

## Membership test

```python
"art" in "Tartu"   # True
```

## Strings are immutable

```python
s = "abc"
s[0] = "Z"        # TypeError
s = "Z" + s[1:]   # OK, but builds a new string
```

## Estonian-letter gotcha

Estonian vowels are `a e i o u õ ä ö ü`. Estonian consonants include `š` and `ž`. Don't forget these in vowel-counting tasks.

## Exam-style tasks

> **T3.1 — Vowel count (Estonian)**
>
> Read a line. Print how many vowels it contains (count both upper and lower case, including `õ ä ö ü`).
>
> Input `Tere, Mari!` → `4`

> **T3.2 — Reverse the line**
>
> Read a line. Print the line reversed.
>
> Input `Tartu` → `utraT`

> **T3.3 — Initials**
>
> Read a full name (any number of words). Print the initials in upper case, separated by dots, ending with a dot.
>
> Input `jaan tatikas` → `J.T.`
> Input `Mari Liis Saar` → `M.L.S.`

> **T3.4 — Censor a word**
>
> Read two lines: a sentence, then a word. Replace every occurrence of that word in the sentence with asterisks of the same length (case-sensitive). Print the result.
>
> Input:
> ```
> Mari likes Mari but Mari is busy
> Mari
> ```
> Output: `**** likes **** but **** is busy`
