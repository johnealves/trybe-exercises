# Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada animal em uma linha.

# with open("animais.txt", "w") as file:
#     file.write("cachorro\n")
#     file.write("gato\n")
#     file.write("hamister\n")
#     file.write("papagaio\n")

import random

animalsList = []

with open("animais.txt", 'r') as file:
    for line in file:
        animalsList.append(line[:-1])

animal = random.choice(animalsList)

scrambled_word = " ".join(random.sample(animal, len(animal)))

print(scrambled_word)

response = input("Qual o nome do animali: ")

for index in range(2):
    if response == animal:
            print("Parabens você acertou")
            break
    elif response != animal:
        response = input("Resposta errada! Tente novamente: ")
        if response == animal:
            print("Parabens você acertou")
            break

if response != animal:
    print("Voce não conseguiu acertar")