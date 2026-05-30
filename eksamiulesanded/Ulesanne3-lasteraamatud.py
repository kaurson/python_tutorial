class Raamat:
    def __init__(self, pealkiri, autor):
        self.pealkiri: str = pealkiri
        self.autor: str = autor

    def __str__(self):
        return f'Raamatu "{self.pealkiri}" autor on {self.autor}'


class Lasteraamat(Raamat):
    def __init__(self, pealkiri, autor, miinimumvanus, maksimumvanus):
        super().__init__(pealkiri, autor)
        self.miinimumvanus: int = miinimumvanus
        self.maksimumvanus: int = maksimumvanus

    def muuda_soovituslikku_vanust(self, miinimumvanus, maksimumvanus):
        self.miinimumvanus = miinimumvanus
        self.maksimumvanus = maksimumvanus
        print("Soovituslik vanus muudetud!")

    def __str__(self):
        return (
            f'Lasteraamatu "{self.pealkiri}" autor on {self.autor}, '
            f"soovituslik vanus {self.miinimumvanus}-{self.maksimumvanus}"
        )


rehepapp = Raamat("Rehepapp", "Andrus Kivirähk")
karneval = Lasteraamat("Karneval ja kartulisalat", "Andrus Kivirähk", 10, 12)
sipsik = Lasteraamat("Sipsik", "Eno Raud", 10, 12)

print(rehepapp)
print(karneval)
print(sipsik)

sipsik.muuda_soovituslikku_vanust(7, 9)
print(sipsik)
