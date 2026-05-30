def loe_tulemused(faili_nimi):
    sõnastik = {}
    with open(faili_nimi, "r", encoding="utf-8") as fail:
        for rida in fail:
            rida = rida.strip()
            if not rida:
                continue
            osad = rida.split(";")
            riik = osad[0]
            tulemused = osad[1:]
            sõnastik[riik] = tulemused
    return sõnastik


def lisa_tulemus(sõnastik):
    riik = input("Nimi: ")
    tulemus = input("Tulemus(W/L): ")
    if riik in sõnastik:
        sõnastik[riik].append(tulemus)
    else:
        sõnastik[riik] = [tulemus]
    print("Tulemus lisatud!")
    return sõnastik


def leia_võitude_arv(sõnastik, riigi_nimi):
    return sõnastik[riigi_nimi].count("W")


def leia_parim(sõnastik):
    parim_riik = None
    parim_võite = None
    for riik in sõnastik:
        võite = leia_võitude_arv(sõnastik, riik)
        if parim_võite is None or võite > parim_võite:
            parim_riik = riik
            parim_võite = võite
    print(f"Parim on {parim_riik} {parim_võite} võiduga")


sõnastik = loe_tulemused("tulemused.txt")

while True:
    print("1 - Vaata punktitabelit")
    print("2 - Lisa tulemus")
    print("3 - Leia võitude arv")
    print("4 - Leia parim")
    print("5 - Lõpeta programmi töö")
    valik = input("Sisesta valik: ")

    if valik == "1":
        for riik, tulemused in sõnastik.items():
            print(riik, " ".join(tulemused))
    elif valik == "2":
        lisa_tulemus(sõnastik)
    elif valik == "3":
        riik = input("Sisesta riigi nimi: ")
        print(leia_võitude_arv(sõnastik, riik))
    elif valik == "4":
        leia_parim(sõnastik)
    elif valik == "5":
        with open("tulemused_uus.txt", "w", encoding="utf-8") as fail:
            for riik, tulemused in sõnastik.items():
                fail.write(riik + ";" + ";".join(tulemused) + "\n")
        print("Faili salvestatud! Programm lõpetas töö.")
        break
