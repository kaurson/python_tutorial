

def loe_seis(failinimi):
    seis = {}
    with open(failinimi, 'r') as f:
        for line in f:
            kontod = line.split()
            seis[kontod[0]] = kontod[1:]
        return seis



def lisa_raha(kontonimi:str, summa:float, kontod:dict):
    if kontonimi in kontod:
        kontod[kontonimi].append(str(summa))
        print("Raha lisatud!")
        return kontod
    else:
        print("Sellist kontot ei ole!")
        return kontod
    




def võta_raha(kontonimi, summa, kontod):
    if kontonimi not in kontod:
        print("Sellist kontot ei ole!")
        return kontod
    saldo = sum(map(float, kontod[kontonimi]))
    if saldo < summa:
        print("Kontol pole piisavalt raha!")
        return kontod
    elif saldo >= summa:
        kontod[kontonimi].append(str(-summa))
        print("Raha välja võetud!")
        return kontod
#print(loe_seis('/Users/kaur/Python tutorial/eksamiulesanded/jaanuar.txt'))

#print(võta_raha('põhikonto', 100, loe_seis('/Users/kaur/Python tutorial/eksamiulesanded/jaanuar.txt')))



def main():
    konto_seis = loe_seis('/Users/kaur/Python tutorial/eksamiulesanded/jaanuar.txt')
    while True:
        print("Valige tegevus:")
        print("1 - Vaatan kontode väljavõtet")
        print("2 - Lisan raha")
        print("3 - Võtan raha")
        print("4 - Vaatan kontode seisu")
        print("5 - Lõpetan programmi töö")
        valik = input()
        if valik == "1":
            #for i in loe_seis('/Users/kaur/Python tutorial/eksamiulesanded/jaanuar.txt').keys():
            for i in konto_seis.keys():
                print(f"{i} {' '.join(konto_seis[i])}")
            #return loe_seis('/Users/kaur/Python tutorial/eksamiulesanded/jaanuar.txt')
        elif valik == "2":
            kontonimi = input("Sisestage konto nimi: ")
            summa = float(input("Sisesta summa: "))
            konto_seis = lisa_raha(kontonimi, summa, konto_seis)
            for i in konto_seis.keys():
                print(f"{i} {' '.join(konto_seis[i])}")
                #print(f"{i}: {' '.join(konto_seis[i])}")
        elif valik == "3":
            kontonimi = input("Sisestage konto nimi: ")
            summa = float(input("Sisestage väljavõetav rahasumma: "))
            konto_seis = võta_raha(kontonimi, summa, konto_seis)
            for i in konto_seis.keys():
                print(f"{i} {' '.join(konto_seis[i])}")
        elif valik == "4":
            kogu_saldo = 0
            kontodel = {}
            for i in konto_seis.keys():
                kontodel[i] = round(sum(map(float, konto_seis[i])), 2)
            for i in kontodel.keys():
                print(i, kontodel[i])
        elif valik == "5":
            with open('/Users/kaur/Python tutorial/eksamiulesanded/jaanuar.txt', 'w') as f:
                for i in konto_seis.keys():
                    f.write(f"{i} {' '.join(konto_seis[i])}\n")
            print("Programm lõpetas töö")
            break
            
        

if __name__ == "__main__":
    main()