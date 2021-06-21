// Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
// O script deve ser executado através do comando npm run sorteio .
// Utilize o readline-sync para realizar input de dados.
// Armazene o script em sorteio.js.
// O número gerado deve ser um inteiro entre 0 e 10.
// Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
// Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
// Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.

const readline = require("readline-sync");

function luckNumber() {
  const randomNumber = Math.floor(Math.random() * 11);
  const choseNumber = readline.questionInt("Escolha um numero de 1 a 10! ")

  if (randomNumber === choseNumber) {
    console.log("Parabéns, número correto!")
    return;
  }
  console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)

  const newGame = readline.question("Deseja jogar novamente?(s/n) ");

  switch (newGame) {
  case "s":
    return luckNumber()
  case "n":
    return;
  }
}

module.exports = luckNumber;

