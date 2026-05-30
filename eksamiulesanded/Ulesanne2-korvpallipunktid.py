def loe_seis(faili_nimi):
    sõnastik = {}
    with open(faili_nimi, "r", encoding="utf-8") as fail:
        for rida in fail:
            rida = rida.strip()
            if not rida:
                continue
            osad = rida.split()
            nimi = osad[0]
            punktid = [int(skoor) for skoor in osad[1:]]
            sõnastik[nimi] = punktid
    return sõnastik


def lisa_tulemus(osaleja, sõnastik, tulemus):
    if osaleja in sõnastik:
        sõnastik[osaleja].append(tulemus)
        print("Tulemus lisatud!")
    else:
        print("Sellist korvpallurit pole sõnastikus!")
    return sõnastik


def leia_keskmine(osaleja, sõnastik):
    punktid = sõnastik[osaleja]
    return sum(punktid) / len(punktid)


def leia_parim(sõnastik):
    parim_nimi = None
    parim_keskmine = None
    for nimi in sõnastik:
        keskmine = leia_keskmine(nimi, sõnastik)
        if parim_keskmine is None or keskmine > parim_keskmine:
            parim_nimi = nimi
            parim_keskmine = keskmine
    print(f"Parim on {parim_nimi} tulemusega {parim_keskmine}")


sõnastik = loe_seis("punktid.txt")

while True:
    print("1 - Vaata punktitabelit")
    print("2 - Lisa tulemus")
    print("3 - Leia korvpalluri keskmine")
    print("4 - Leia parim")
    print("5 - Lõpeta programmi töö")
    valik = input("Vali tegevus: ")

    if valik == "1":
        for nimi, punktid in sõnastik.items():
            print(nimi, " ".join(str(skoor) for skoor in punktid))
    elif valik == "2":
        nimi = input("Sisesta nimi: ")
        tulemus = int(input("Sisesta punktid: "))
        lisa_tulemus(nimi, sõnastik, tulemus)
    elif valik == "3":
        nimi = input("Sisesta nimi: ")
        keskmine = leia_keskmine(nimi, sõnastik)
        print(f"Mängija {nimi} keskmine skoor on {keskmine}")
    elif valik == "4":
        leia_parim(sõnastik)
    elif valik == "5":
        with open("punktid_uus.txt", "w", encoding="utf-8") as fail:
            for nimi, punktid in sõnastik.items():
                fail.write(nimi + " " + " ".join(str(skoor) for skoor in punktid) + "\n")
        print("Faili salvestatud. Programm lõpetas töö.")
        break
