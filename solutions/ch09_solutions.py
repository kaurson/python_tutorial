"""
Chapter 9 — reference solutions
"""

import os

HERE = os.path.dirname(os.path.abspath(__file__))
# grades.txt lives in the lesson folder
GRADES = os.path.join(HERE, "..", "09_files_and_text_processing", "grades.txt")


def _read_grades():
    rows = []
    with open(GRADES, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            name, score = line.split(";")
            rows.append((name, int(score)))
    return rows


def task_9_1():
    rows = _read_grades()
    top = max(score for _, score in rows)
    winners = sorted(name for name, s in rows if s == top)
    print(winners[0])


def task_9_2():
    rows = _read_grades()
    avg = sum(s for _, s in rows) / len(rows)
    print(f"{avg:.1f}")


def task_9_3():
    rows = _read_grades()
    passed = sorted(name for name, s in rows if s >= 60)
    for n in passed:
        print(n)


def task_9_4():
    rows = _read_grades()
    n = len(rows)
    avg = sum(s for _, s in rows) / n
    top = max(rows, key=lambda r: (r[1], -ord(r[0][0])))
    # simpler: top score, alphabetical tie-break
    best_score = max(s for _, s in rows)
    best_name = sorted(name for name, s in rows if s == best_score)[0]

    report_path = os.path.join(HERE, "report.txt")
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(f"Students: {n}\n")
        f.write(f"Average: {avg:.1f}\n")
        f.write(f"Top: {best_name} ({best_score})\n")

    with open(report_path, encoding="utf-8") as f:
        print(f.read(), end="")
