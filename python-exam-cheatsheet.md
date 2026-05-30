# Python Exam Cheat Sheet — Data Types & How They Interact

Quick reference for types, operators, conversions, and the “gotchas” that show up on exams. Examples tested on Python 3.

---

## 1. Built-in types at a glance

| Type | Literal examples | Mutable? | Hashable? | Can be `dict` key? |
|------|------------------|----------|-----------|-------------------|
| `int`, `float`, `complex` | `42`, `3.14`, `2+3j` | No | Yes | Yes |
| `bool` | `True`, `False` | No | Yes | Yes |
| `str` | `"hi"`, `'a'` | No | Yes | Yes |
| `NoneType` | `None` | No | Yes | Yes |
| `tuple` | `(1, 2)` | No* | Yes* | Yes* |
| `list` | `[1, 2]` | Yes | No | No |
| `dict` | `{"a": 1}` | Yes | No | No |
| `set` | `{1, 2}` | Yes | No | No |
| `range` | `range(5)` | No | Yes | Yes |
| `bytes` | `b"hi"` | No | Yes | Yes |

\* Tuple is immutable only if every element inside is immutable. `([1],)` is hashable only if the list inside never changes — usually avoid mutable items in tuples used as keys.

**Check type:** `type(x)` · **Instance check:** `isinstance(x, int)` (preferred over `type(x) == int`)

---

## 2. Truthiness (used in `if`, `while`, `and`, `or`, `not`)

### Falsy (evaluate to `False` in boolean context)

```text
None
False
0, 0.0, 0j
"", [], (), {}, set()
```

### Truthy (everything else)

```python
bool("False")   # True  — non-empty string!
bool("0")       # True
bool([0])       # True  — list is not empty
bool("")        # False
```

### `and` / `or` return the **operand**, not always `bool`

```python
5 or 0          # 5
0 or "hi"       # "hi"
True and 7      # 7
0 and 7         # 0  (short-circuit: right side never evaluated)
```

**Exam trap:** `if x:` means “if x is truthy”, not “if x is True”.

---

## 3. Comparison vs identity

| Operator | Meaning |
|----------|---------|
| `==`, `!=`, `<`, `>`, `<=`, `>=` | **Value** equality / ordering |
| `is`, `is not` | **Same object** in memory (identity) |
| `in`, `not in` | Membership |

```python
0 == False      # True   (bool is subclass of int)
[] == False     # False
[] is False     # False
None is None    # True — always use `is` / `is not` with None
"5" == 5        # False  (different types)
```

**Rule:** Use `is` for `None`. Use `==` for values.

---

## 4. Numeric types — operations & mixing

`bool` is a subclass of `int`: `True == 1`, `False == 0`.

| Expression | Result | Notes |
|------------|--------|-------|
| `3 + 5` | `8` (`int`) | |
| `3 + 3.0` | `6.0` (`float`) | int promoted to float |
| `3 / 2` | `1.5` (`float`) | `/` always float division |
| `3 // 2` | `1` (`int`) | floor division |
| `-3 // 2` | `-2` | floors toward **negative infinity** |
| `10 % 3` | `1` | |
| `-10 % 3` | `2` | sign of result matches divisor |
| `True + True` | `2` | |
| `2 ** 3` | `8` | |
| `0.1 + 0.2 == 0.3` | `False` | floating-point rounding |

**Cannot mix with strings without conversion:**

```python
"3" + 5     # TypeError
int("42")   # 42
float("3.14")  # 3.14
int("3.14") # ValueError — use int(float("3.14")) for 3
int("")     # ValueError
```

---

## 5. Strings (`str`)

### Same-type operations

| Op | Effect | Example |
|----|--------|---------|
| `+` | Concatenate | `"ab" + "c"` → `"abc"` |
| `*` | Repeat (int only) | `"a" * 3` → `"aaa"`, `3 * "a"` → `"aaa"` |
| `*` with float | **TypeError** | `"a" * 3.5` |
| `[i]`, `[start:stop:step]` | Index / slice | `"abc"[1:]` → `"bc"` |
| `in` | Substring test | `"b" in "abc"` → `True` |
| `len(s)` | Length | |

### str ↔ other types

| Works | Fails |
|-------|-------|
| `str(42)` → `"42"` | `"42" + 42` |
| `int("42")`, `float("3.14")` | `int("3.14")` |
| `" ".join(["a", "b"])` | `" ".join([1, 2])` — need `map(str, ...)` |
| `list("ab")` → `['a','b']` | |
| `"+".join(str(x) for x in nums)` | common exam pattern |

### Useful methods (exams love these)

```python
"  hi  ".strip()           # "hi"
"a,b".split(",")            # ["a", "b"]
"a b".split()               # ["a", "b"]  — any whitespace
",".join(["a", "b"])        # "a,b"
s.startswith("x"), s.endswith("x")
s.replace("old", "new")
s.lower(), s.upper()
```

---

## 6. Sequences: `list`, `tuple`, `str`, `range`

### Shared behavior (sequence protocol)

| Op | `list` | `tuple` | `str` | `range` |
|----|--------|---------|-------|---------|
| `+` (concat) | Yes | Yes | Yes | **No** |
| `*` (repeat) | Yes | Yes | Yes | **No** |
| `len`, `[i]`, slice | Yes | Yes | Yes | Yes (lazy) |
| `in` | Yes | Yes | Yes | Yes |
| Mutable | Yes | No | No | No |

```python
[1, 2] + [3]        # [1, 2, 3]
(1, 2) + (3,)       # (1, 2, 3)  — note comma for 1-tuple
[1] * 3             # [1, 1, 1]  — same object repeated!
list(range(3))      # [0, 1, 2]
list(range(1, 5, 2))  # [1, 3]
```

### Indexing & slicing

```python
lst[-1]      # last item
lst[1:3]     # index 1 up to (not including) 3
lst[:2]      # start to index 2
lst[::2]     # every second item
```

### list ↔ tuple ↔ str

```python
list((1, 2))      # [1, 2]
tuple([1, 2])     # (1, 2)
list("ab")        # ['a', 'b']
"".join(['a','b'])  # "ab"
```

### list gotchas

```python
a = [[0]] * 3     # three refs to SAME inner list — aliasing!
a[0].append(1)    # [[0,1],[0,1],[0,1]]
# Safer: [[0] for _ in range(3)]
```

---

## 7. `dict` — keys, values, and mixing types

- Keys must be **hashable** (immutable types, tuples of immutables).
- Values can be anything.
- `in` checks **keys**, not values.

```python
{"a": 1}["a"]           # 1
{"a": 1}.get("b", 0)     # 0  — no KeyError
"a" in {"a": 1}         # True
1 in {1: "x"}            # True  (key 1, not value)
d.keys(), d.values(), d.items()
for k, v in d.items(): ...
```

### Building dicts

```python
dict([("a", 1), ("b", 2)])
dict.fromkeys("ab", 0)   # {"a": 0, "b": 0}
{k: v for k, v in pairs}
```

### dict + other types

| Works | Fails |
|-------|-------|
| `list(d)`, `sorted(d)` (keys) | `d1 + d2` |
| `d.update(other)` | `[1,2] + {1:2}` |
| `d \| other` (Py 3.9+) merge | using list as key |

---

## 8. `set` — unique, unordered, no `+`

```python
{1, 1, 2}              # {1, 2}
set([1, 2, 2])         # {1, 2}
{1, 2} & {2, 3}        # {2}   intersection
{1, 2} | {2, 3}        # union
{1, 2} - {2}           # difference
{1, 2} ^ {2, 3}        # symmetric difference
1 in {1, 2}            # True
```

| Op | Works? |
|----|--------|
| `+` | **No** — TypeError |
| `*`, indexing | **No** |
| `& \| - ^` | Yes (set algebra) |

---

## 9. Master table: `+` and `*` between types

### Addition `+`

| Left \ Right | `int/float` | `str` | `list` | `tuple` | `dict` | `set` |
|--------------|-------------|-------|--------|---------|--------|-------|
| `int/float` | math | **Error** | **Error** | **Error** | **Error** | **Error** |
| `str` | **Error** | concat | **Error** | **Error** | **Error** | **Error** |
| `list` | **Error** | **Error** | concat | **Error** | **Error** | **Error** |
| `tuple` | **Error** | **Error** | **Error** | concat | **Error** | **Error** |
| `dict` | **Error** | **Error** | **Error** | **Error** | **Error** | **Error** |
| `set` | **Error** | **Error** | **Error** | **Error** | **Error** | **Error** |

### Multiplication `*` (repeat)

| Left \ Right | `int` | `float` | `str` | `list` | `tuple` |
|--------------|-------|---------|-------|--------|---------|
| `int` | math | math | repeat | repeat | repeat |
| `str` | repeat | **Error** | — | — | — |
| `list` | repeat | **Error** | — | — | — |

---

## 10. Type conversion cheat sheet

| Call | From → To | Common failure |
|------|-----------|----------------|
| `int(x)` | str (whole), float, bool | `int("3.14")`, `int("")` |
| `float(x)` | str, int | `float("x")` |
| `str(x)` | almost anything | rare |
| `bool(x)` | anything | see truthiness |
| `list(x)` | str, tuple, range, dict (keys), set | |
| `tuple(x)` | list, str, range | |
| `set(x)` | list, str (chars) | |
| `dict(x)` | list of pairs, zip | |

**Patterns from exam tasks:**

```python
tulemus = int(input("..."))      # input() always returns str
summa = float(input("..."))
skoorid = [int(x) for x in osad[1:]]
saldo = sum(map(float, kontod[nimi]))
fail.write(" ".join(str(x) for x in punktid))
```

---

## 11. Operator precedence (high → low)

```text
()                          grouping
**                          exponent
+x, -x, ~x                  unary
*, /, //, %                 multiply / divide
+, -                        add / subtract
==, !=, <, >, <=, >=, is, in, not in, is not
not
and
or
```

Assignment `=`, `+=`, etc. are statements, lowest priority.

---

## 12. Exam traps checklist

| Trap | Remember |
|------|----------|
| `input()` | Always returns **`str`** — convert with `int()` / `float()` |
| `3 / 2` | `1.5`, not `1` — use `//` for integer division |
| `valik == 1` vs `valik == "1"` | menu choice from `input()` is string |
| Empty file line | `if not rida:` or `rida.strip()` before split |
| `open` without `encoding` | use `encoding="utf-8"` for Estonian text |
| `with open(...) as f:` | file auto-closes |
| `split()` vs `split(" ")` | `split()` handles multiple spaces |
| `KeyError` | use `.get(key, default)` or `if key in d` |
| `FileNotFoundError` | path / working directory |
| List from file | `line.split()` then `int()` each number |
| Mutable default args | `def f(x, lst=[])` — shared list! Use `None` |
| `==` vs `is` | `None` → always `is` |
| `and`/`or` | return operands; short-circuit |
| `[1]*3` inner lists | aliasing bug |

---

## 13. Built-ins that mix types safely

```python
len(x)              # sequences, str, dict, set
sum(iterable)       # numbers; start=0
sum(map(float, lst))
min(lst), max(lst)
sorted(lst)         # returns new list
sorted(d)           # sorts keys
enumerate(lst)      # (index, value)
zip(a, b)           # pairs
any(iterable), all(iterable)
range(stop), range(start, stop), range(start, stop, step)
map(func, iterable)
filter(func, iterable)
round(3.14159, 2)   # 3.14
```

---

## 14. Exceptions (what error for what mistake)

| Error | Typical cause |
|-------|----------------|
| `TypeError` | wrong types for `+`, `*`, etc. |
| `ValueError` | right type, bad value (`int("abc")`) |
| `KeyError` | missing dict key with `d[k]` |
| `IndexError` | list index out of range |
| `FileNotFoundError` | bad path |
| `ZeroDivisionError` | `/` or `//` by zero |
| `AttributeError` | missing method/attribute on object |

```python
try:
    x = int(s)
except ValueError:
    print("Not a number")
```

---

## 15. OOP quick ref (your exam uses classes)

```python
class Töötaja:
    def __init__(self, nimi, palk):
        self.nimi = nimi
        self.palk = palk

    def __str__(self):
        return f"{self.nimi}: {self.palk}"

class Juhataja(Töötaja):
    def __init__(self, nimi, palk):
        super().__init__(nimi, palk)
        self.töötajad = []
```

| Concept | Syntax |
|---------|--------|
| Instance attribute | `self.x = ...` |
| Inheritance | `class Child(Parent):` |
| Call parent init | `super().__init__(...)` |
| String for `print` | `__str__(self)` |
| Type hint (optional) | `def f(x: int) -> float:` |

---

## 16. File I/O pattern (matches your exercises)

```python
def loe_seis(faili_nimi):
    sõnastik = {}
    with open(faili_nimi, "r", encoding="utf-8") as fail:
        for rida in fail:
            rida = rida.strip()
            if not rida:
                continue
            osad = rida.split()
            nimi = osad[0]
            väärtused = [int(x) for x in osad[1:]]
            sõnastik[nimi] = väärtused
    return sõnastik

with open("väljund.txt", "w", encoding="utf-8") as fail:
    for nimi, punktid in sõnastik.items():
        fail.write(nimi + " " + " ".join(str(p) for p in punktid) + "\n")
```

---

## 17. One-page “what happens?” drill

```python
# Numbers
3 / 2          # 1.5
3 // 2         # 1
-3 // 2        # -2

# Strings
"3" + "5"      # "35"
"a" * 3        # "aaa"

# Bool / logic
0 == False     # True
bool("")       # False
bool("False")  # True
5 or 0         # 5

# Collections
[1] * 3                    # [1, 1, 1]
{1,2} & {2,3}               # {2}
"a" in {"a": 1}            # True (key)
list("ab")                 # ['a','b']

# Errors
"3" + 5        # TypeError
int("3.14")    # ValueError
{1}+{2}        # TypeError
```

---

*Good luck on the exam. For hands-on practice, see `eksamiulesanded/` in this repo.*
