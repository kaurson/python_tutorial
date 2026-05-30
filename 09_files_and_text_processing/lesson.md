# Chapter 9 — Files & text processing

## Reading a file

```python
with open("data.txt") as f:
    text = f.read()        # entire content as one string

with open("data.txt") as f:
    lines = f.readlines()  # list of lines, each ends with "\n"

with open("data.txt") as f:
    for line in f:
        line = line.rstrip("\n")   # strip the trailing newline
        print(line)
```

Always use `with open(...) as f:` — it closes the file automatically, even on error.

## Writing a file

```python
with open("out.txt", "w") as f:
    f.write("hello\n")
    f.write("world\n")
```

`"w"` overwrites. Use `"a"` to append.

## UTF-8 (Estonian letters)

```python
with open("data.txt", encoding="utf-8") as f:
    ...
```

Always specify `encoding="utf-8"` when working with Estonian text.

## Parsing semicolon-separated lines

Estonian exams often hand you a file like `grades.txt`:

```
Mari;87
Jaan;92
Liis;78
```

Parse it:

```python
with open("grades.txt", encoding="utf-8") as f:
    for line in f:
        name, score = line.strip().split(";")
        score = int(score)
        ...
```

## Reading numbers from a file

```python
with open("nums.txt") as f:
    nums = [int(line) for line in f if line.strip()]
```

The `if line.strip()` filters empty lines.

## Worked example — top student

```python
best_name = None
best_score = -1
with open("grades.txt", encoding="utf-8") as f:
    for line in f:
        name, score = line.strip().split(";")
        score = int(score)
        if score > best_score:
            best_score = score
            best_name = name
print(best_name)
```

## Exam-style tasks

The data file is in this folder: `grades.txt`. Use it.

> **T9.1 — Top student**
>
> Read `grades.txt`. Each line is `name;score`. Print the name of the student with the highest score. If there's a tie, print the alphabetically first name.

> **T9.2 — Class average**
>
> Print the average score across all rows, rounded to 1 decimal.

> **T9.3 — Pass list**
>
> Print the names of students whose score is at least 60, **alphabetically**, one per line.

> **T9.4 — Save a report**
>
> Write a file `report.txt` containing, in this order:
>
> 1. `Students: <n>`
> 2. `Average: <avg with 1 decimal>`
> 3. `Top: <name> (<score>)`
>
> Then print the contents of `report.txt`.
