def arvuta_hind(sõiduaeg, minuti_hind):
    if sõiduaeg >= 20:
        return round(5.15, 2)
    return round(sõiduaeg * minuti_hind, 2)


minuti_hind = float(input("Sisestage minuti hind eurodes: "))
planeeritud = float(input("Kui palju raha on planeeritud? "))

päevad = []
with open("min.txt", "r", encoding="utf-8") as fail:
    for rida in fail:
        rida = rida.strip()
        if rida:
            päevad.append(int(rida))

kokku = 0
for number, minutid in enumerate(päevad, start=1):
    hind = arvuta_hind(minutid, minuti_hind)
    kokku += hind
    print(f"{number}. päeval kulus {hind} eurot.")

kokku = round(kokku, 2)
print(f"Kokku kulus raha {kokku} eurot.")

if kokku > planeeritud:
    print("Eelarve läks lõhki!")
