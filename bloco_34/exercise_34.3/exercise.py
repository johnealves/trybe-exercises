# Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número';
# Ex: 3 -> [1, 2, "Fizz"] .


def listNumbers(n):
    numList = []
    for index in range(n):
        if (index + 1) % 3 == 0 and (index + 1) % 5 == 0:
            numList.append("FizzBuzz")
        elif (index + 1) % 3 == 0:
            numList.append("Fizz")
        elif (index + 1) % 5 == 0:
            numList.append("Buzz")
        else:
            numList.append(index + 1)
    return numList

