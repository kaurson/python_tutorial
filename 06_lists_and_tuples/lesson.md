# Chapter 6 — Lists & tuples

## Lists — ordered, mutable

```python
xs = [3, 1, 4, 1, 5]
xs[0]            # 3
xs[-1]           # 5
xs[1:3]          # [1, 4]
len(xs)          # 5
xs.append(9)     # [3, 1, 4, 1, 5, 9]
xs.pop()         # 9    (removes & returns last)
xs.pop(0)        # 3    (removes & returns at index)
xs.insert(0, 99) # insert at index
xs.remove(1)     # remove first occurrence of value 1
1 in xs          # True / False
xs.count(1)      # how many times 1 appears
xs.index(4)      # index of first 4
```

## Sorting

```python
xs = [3, 1, 4, 1, 5]
xs.sort()                 # in-place, ascending
xs.sort(reverse=True)     # in-place, descending
ys = sorted(xs)           # NEW sorted list, xs unchanged
sorted(xs, reverse=True)
```

## Common aggregates

```python
sum(xs)
min(xs)
max(xs)
len(xs)
sum(xs) / len(xs)         # average
```

## Building a list — three ways

```python
# 1) Append in a loop
nums = []
for i in range(5):
    nums.append(i * i)        # [0, 1, 4, 9, 16]

# 2) List comprehension (concise — favourite of exams)
nums = [i * i for i in range(5)]

# 3) With a filter
evens = [i for i in range(20) if i % 2 == 0]
```

## Reading a list from input

```python
# "3 1 4 1 5"
xs = list(map(int, input().split()))
```

## Tuples — like lists but immutable

```python
point = (3, 4)
x, y = point          # unpacking
```

Useful for returning multiple values from a function and as dictionary keys.

## Worked example — second largest unique value

```python
xs = list(map(int, input().split()))
unique = sorted(set(xs), reverse=True)
print(unique[1])
```

## Exam-style tasks

> **T6.1 — Sort descending**
>
> Read space-separated integers on one line. Print them sorted in descending order, space-separated.

> **T6.2 — Second largest unique**
>
> Read space-separated integers. Print the second-largest **unique** value.
> If fewer than 2 unique values exist, print `none`.
>
> Input `5 1 5 3 3` → `3`
> Input `5 5 5`     → `none`

> **T6.3 — Average and above-average**
>
> Read space-separated integers. Print the average rounded to 2 decimals on the first line.
> On the second line, print (space-separated) all values strictly greater than the average,
> in the order they appeared. If there are none, print an empty line.

> **T6.4 — Reverse without slicing**
>
> Read space-separated integers. Print them reversed, space-separated. Use a loop, don't use `[::-1]`.
