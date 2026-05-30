


class Töötaja():
    def __init__(self, nimi, palk):
        self.nimi: str = nimi
        self.palk: int = palk

    def __str__(self):
        return f"Olen {self.nimi} ja saan palka {self.palk} eurot."


class Juhataja(Töötaja):
    def __init__(self, nimi, palk):
        super().__init__(nimi, palk)
        self.töötajad: list = []

    def lisa_töötaja(self, Töötaja):
        if len(self.töötajad) < 2:
            self.töötajad.append(Töötaja)
            print(f"Uus töötaja {Töötaja.nimi} lisatud juhatajale {self.palk}")
        else:
            print(f"Juhatajal {self.nimi} on juba liialt palju töötajaid")
    def info(self):
        print(self)
        for t in self.töötajad:  
            print(t)
        return

t1 = Töötaja('Ants', 1000)
t2 = Töötaja('Berit', 2000)
t3 = Töötaja('Carl', 3000)
j1 = Juhataja('Diana', 4000)
j1.lisa_töötaja(t1)
#Uus töötaja Ants lisatud juhatajale Diana
j1.lisa_töötaja(t2)
#Uus töötaja Berit lisatud juhatajale Diana
j1.lisa_töötaja(t3)
#Juhatajal Diana on juba liialt palju töötajaid
j1.info()