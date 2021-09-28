# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

name = input("Digite um nome: ")
for index in range(len(name)):
    print(name[:-(index + 1)])
