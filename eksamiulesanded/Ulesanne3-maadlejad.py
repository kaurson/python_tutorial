class Sportlane:
    def __init__(self, nimi, kaal):
        self.nimi: str = nimi
        self.kaal: int = kaal

    def __str__(self):
        return f"Nimi: {self.nimi}, kaal: {self.kaal} kg"


class Maadleja(Sportlane):
    def __init__(self, nimi, kaal):
        super().__init__(nimi, kaal)
        self.kaalukategooria: str = ""
        self._maara_kaalukategooria()

    def _maara_kaalukategooria(self):
        if self.kaal <= 55:
            self.kaalukategooria = "kärbeskaal"
        elif self.kaal <= 66:
            self.kaalukategooria = "kergekaal"
        elif self.kaal <= 84:
            self.kaalukategooria = "keskkaal"
        elif self.kaal <= 96:
            self.kaalukategooria = "poolraskekaal"
        else:
            self.kaalukategooria = "raskekaal"

    def muuda_kaalu(self, uus_kaal):
        self.kaal = uus_kaal
        self._maara_kaalukategooria()

    def __str__(self):
        return f"Nimi: {self.nimi}, kaal: {self.kaal} kg, kaalukategooria: {self.kaalukategooria}"


indrek = Sportlane("Indrek", 105)
georg = Maadleja("Georg", 83)
kristjan = Maadleja("Kristjan", 115)

print(indrek)
print(georg)
print(kristjan)

kristjan.muuda_kaalu(95)
print(kristjan)
