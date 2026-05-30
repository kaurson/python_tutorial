# Chapter 7 — Dictionaries & sets

## Dictionary basics

A `dict` stores **key → value** pairs.

```python
ages = {"Mari": 17, "Jaan": 18}
ages["Mari"]            # 17
ages["Liis"] = 16       # add a key
ages["Mari"] = 18       # update
del ages["Jaan"]        # remove
"Mari" in ages          # True
len(ages)               # 2
```

## Safe lookup with `.get`

```python
ages.get("Mari")        # 17
ages.get("Toomas")      # None  (no KeyError)
ages.get("Toomas", 0)   # 0     (default)
```

## Iterating

```python
for name in ages:                  # keys
    print(name)
for name, age in ages.items():     # key+value
    print(name, age)
for age in ages.values():
    print(age)
```

## The classic "count occurrences" pattern

```python
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
```

This is the single most common dictionary task on Estonian entrance exams.

## Sorting a dictionary

```python
# By key (alphabetical)
for k in sorted(counts):
    print(k, counts[k])

# By value (largest first)
for k, v in sorted(counts.items(), key=lambda kv: -kv[1]):
    print(k, v)
```

## Sets — unique elements, fast membership

```python
s = {1, 2, 3}
s.add(4)
s.remove(2)
3 in s                  # True
len(s)

# From a list
unique = set([1, 1, 2, 3])   # {1, 2, 3}

a = {1, 2, 3}
b = {2, 3, 4}
a | b   # union        {1, 2, 3, 4}
a & b   # intersection {2, 3}
a - b   # difference   {1}
a ^ b   # symmetric    {1, 4}
```

## Worked example — word frequencies

```python
text = input()
counts = {}
for w in text.split():
    counts[w] = counts.get(w, 0) + 1
for w in sorted(counts):
    print(w, counts[w])
```

## Exam-style tasks

> **T7.1 — Word frequency**
>
> Read a line of text. Print each unique word and its count, **alphabetically**, one per line as `word count`.
> Treat words as case-sensitive, split by whitespace.

> **T7.2 — Most common letter**
>
> Read a line. Print the most common letter (ignore spaces, case-insensitive).
> If multiple letters tie, print the alphabetically earliest.

> **T7.3 — Common elements**
>
> Read two lines, each containing space-separated integers. Print the integers that appear in **both** lines, sorted ascending, space-separated. Print empty line if none.

> **T7.4 — Unique count**
>
> Read a line of space-separated integers. Print the number of **distinct** values.
