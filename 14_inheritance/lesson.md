# Chapter 14 — Inheritance & extending classes

## The idea

A **subclass** reuses everything from a **parent class** and can add or change behaviour.

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")


class Dog(Animal):                     # Dog inherits from Animal
    def speak(self):                   # overrides parent method
        print(f"{self.name} says Auh!")


a = Animal("Beast")
a.speak()         # "Beast makes a sound"

rex = Dog("Rex")
rex.speak()       # "Rex says Auh!"
```

A `Dog` *is an* `Animal`. It got `__init__` from `Animal` for free. It replaced `speak`.

## `super()` — calling the parent

Most often you want to **extend** the parent's behaviour, not replace it. Use `super()` to reach the parent.

```python
class Animal:
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs

    def describe(self):
        return f"{self.name} has {self.legs} legs"


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, legs=4)   # let Animal set name + legs
        self.breed = breed               # add new attribute

    def describe(self):
        base = super().describe()        # reuse parent's description
        return f"{base}, breed: {self.breed}"


rex = Dog("Rex", "labrador")
print(rex.describe())   # "Rex has 4 legs, breed: labrador"
```

This is the "extending a model" pattern: keep the parent's `__init__`, add your own attribute, optionally enrich a method.

## `isinstance()` and `issubclass()`

```python
isinstance(rex, Dog)        # True
isinstance(rex, Animal)     # True — subclass IS a parent
isinstance(rex, str)        # False

issubclass(Dog, Animal)     # True
```

`isinstance` is what you use in `if` checks (`if isinstance(x, Account): ...`).

## Polymorphism — same call, different behaviour

```python
class Cat(Animal):
    def speak(self):
        print(f"{self.name} says Näu!")

for animal in [Dog("Rex"), Cat("Miisu"), Animal("Beast")]:
    animal.speak()
```

The loop doesn't know or care which subclass each object is. Each one runs its own `speak()`. This is **polymorphism**.

## Common pitfalls

- Forgetting `super().__init__(...)` → parent's attributes don't get set, you'll see `AttributeError`.
- Putting `class Dog(Animal)` but typing `def __init__(self):` with no params → can't pass `name`.
- Calling `Animal.speak(self)` directly instead of `super().speak()` works but is fragile.

## Worked example — Employee → Manager

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def pay(self):
        return self.salary


class Manager(Employee):
    def __init__(self, name, salary, bonus):
        super().__init__(name, salary)
        self.bonus = bonus

    def pay(self):                     # extend, not replace
        return super().pay() + self.bonus
```

## Exam-style tasks

> **T14.1 — Animal hierarchy**
>
> Define `Animal(name)` with method `speak()` returning `"<name> makes a sound"`. Define `Dog(Animal)` overriding `speak()` to return `"<name> says Auh!"`, and `Cat(Animal)` returning `"<name> says Näu!"`.
> Read `n`. Then read `n` lines, each `<species> <name>` where species is `animal`, `dog`, or `cat`. For each, create the right object and print `obj.speak()`.

> **T14.2 — Manager extends Employee**
>
> Define `Employee(name, salary)` with `.pay()` returning `salary`.
> Define `Manager(Employee)` with extra `bonus`. Override `.pay()` to return `salary + bonus`.
> Read 3 lines: name, salary, bonus. Build a `Manager` and print `<name> earns <pay> EUR`.

> **T14.3 — Square is a Rectangle**
>
> Define `Rectangle(w, h)` with `area()`. Define `Square(side)` that **inherits** from `Rectangle` (pass `side` for both w and h to `super().__init__`).
> Read a side length, build a `Square`, print its area.

> **T14.4 — Polymorphic total**
>
> Using the `Employee`/`Manager` classes from T14.2, read `n`, then `n` lines:
> - `emp <name> <salary>` — make an `Employee`
> - `mgr <name> <salary> <bonus>` — make a `Manager`
>
> Print the **total payroll** (sum of `pay()` over all employees).
