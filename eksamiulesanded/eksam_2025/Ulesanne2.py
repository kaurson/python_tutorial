

import random

def otto_teekond(kütuse_kogus, kokku = 0):
    while kütuse_kogus >  0:
        n = random.random()
        if 0 < n <= 0.7:
            print(f"Otto sõitis 1 km ja kütus vähenes ühe ühiku võrra. Kütust on alles {kütuse_kogus-1} ühikut.")
            #kokku += 1
            return otto_teekond(kütuse_kogus - 1 , kokku +1)
        elif 0.7 < n <= 0.9:
            print(f"Otto sõitis 1 km mäest alla ja kütuse kogus jäi samaks. Kütust on alles {kütuse_kogus} ühikut.")
            #kokku += 1
            return otto_teekond(kütuse_kogus, kokku+1)
        elif 0.9 < n <= 1:
            print(f"Otto sõitis 1 km ja tankis juurde 3 ühikut kütust. Kütust on alles {kütuse_kogus + 2} ühikut.")
            #kokku += 1
            return otto_teekond(kütuse_kogus + 2, kokku+1)
    
    return f"Otto sai sõita {kokku} km kaugusele."



print(otto_teekond(4))