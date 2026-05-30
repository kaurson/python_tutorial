def lugemise_aeg(lehekülgi, kirjasuurus):
    if kirjasuurus == "suur":
        return lehekülgi * 20
    elif kirjasuurus == "keskmine":
        return lehekülgi * 30
    else:
        return lehekülgi * 40


faili_nimi = input("Sisesta faili nimi: ")

lehekülgi_loend = []
with open(faili_nimi, "r", encoding="utf-8") as fail:
    for rida in fail:
        rida = rida.strip()
        if rida:
            lehekülgi_loend.append(int(rida))

kokku_sekundit = 0
for lehekülgi in lehekülgi_loend:
    kirjasuurus = input(f"Raamat on {lehekülgi} lk. Kui suur on kirjastiil? ")
    kokku_sekundit += lugemise_aeg(lehekülgi, kirjasuurus)

tund = kokku_sekundit // 3600
jääk = kokku_sekundit % 3600
minut = jääk // 60
sekund = jääk % 60

print(f"Kokku kulub raamatute lugemiseks {tund} tundi, {minut} minutit ja {sekund} sekundit.")
