#import random

#sisse = 0
#mooda = 0
#torje = 0
#penalt = 0

#def penaltid(n):
#global sisse, mooda, torje
#if n == 0:
#    return "Penaltid läbi!"
#t = random.random()
#if 0.2 < t <= 0.7:
#    sisse += 1
#    print("Sisse!")
#elif 0 < t <= 0.2:
#    mooda += 1
#    print("Mööda!")
#elif 0.7 < t <= 1:
#    print("Tõrje!")

#return penaltid(n - 1)

#print(penaltid(5))

#print('Katrin lõi sisse', sisse, 'penaltit.')


import random

def penaltid(n):
    if n == 0:
        print("Penaltid läbi!")
        return 0

    t = random.random()

    if t <= 0.2:
        print("Mööda!")
        return penaltid(n - 1)
    elif t <= 0.7:
        print("Sisse!")
        return 1 + penaltid(n - 1)
    else:
        print("Tõrje!")
        return penaltid(n - 1)


print('Katrin lõi sisse', penaltid(5), 'penaltit.')