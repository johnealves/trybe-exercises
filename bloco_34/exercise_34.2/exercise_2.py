# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" .

import random

super_herores = ["batman", "spiderman", "ironman", "superman"]

hero = random.choice(super_herores)

scrambled_word = " ".join(random.sample(hero, len(hero)))

print(scrambled_word)

response = input("Qual o nome do heroi: ")

for index in range(2):
    if response == hero:
        print("Parabens você acertou")
        break
    elif index < 2:
        response = input("Resposta errada! Tente novamente: ")  
if response != hero:
    print("Voce não conseguiu acertar")
