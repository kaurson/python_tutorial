"""
Chapter 9 — Files & text processing

Data file: grades.txt   (each line: name;score)
"""

import os

# Use a path relative to this file so it works regardless of cwd.
HERE = os.path.dirname(os.path.abspath(__file__))
GRADES = os.path.join(HERE, "grades.txt")


# T9.1 — Top student (alphabetical tie-break)
def task_9_1():
    # TODO
    pass


# T9.2 — Class average, 1 decimal
def task_9_2():
    # TODO
    pass


# T9.3 — Students with score >= 60, alphabetical
def task_9_3():
    # TODO
    pass


# T9.4 — Write report.txt and print its contents
def task_9_4():
    # TODO
    pass


if __name__ == "__main__":
    task_9_1()
    # task_9_2()
    # task_9_3()
    # task_9_4()
