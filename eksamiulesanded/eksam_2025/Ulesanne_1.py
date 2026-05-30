

class Auto():
    def __init__ (self, automark, auto_hind, autode_arv):
        self.automark:str = automark
        self.auto_hind:float = auto_hind
        self.autode_arv:int = autode_arv
    
    def lisa_auto(self):
        self.autode_arv += 1
        print(f"Uus auto {self.automark} lisatud, kokku: {self.autode_arv}")

    def __str__(self):
        return f"Automark: {self.automark}, hind: {self.auto_hind} ja autode arv: {self.autode_arv}"

class Elektriauto(Auto):
    def __init__(self, automark, auto_hind, autode_arv, aku_mahtuvus):
        super().__init__(automark, auto_hind, autode_arv)
        self.aku_mahtuvus:float = aku_mahtuvus

    def __str__(self):
        return f"Automark: {self.automark}, hind: {self.auto_hind}, autode arv: {self.autode_arv} ja aku mahtuvus: {self.aku_mahtuvus}"


# === PÕHIPROGRAMM ===

# 1. Luuakse Auto ja Elektriauto objektid
auto1 = Auto("Toyota Corolla", 19999.99, 14)
auto2 = Elektriauto("Tesla Model S", 79999.99, 3, 100.0)

# 2. Kuvatakse ekraanile algne info
print(auto1)
print(auto2)

# 3. Rakendatakse lisa_auto meetodit Toyota Corollale
auto1.lisa_auto()

# 4. Rakendatakse kaks korda lisa_auto meetodit Teslale
auto2.lisa_auto()
auto2.lisa_auto()

# 5. Kuvatakse ekraanile lõplik info
print(auto1)
print(auto2)