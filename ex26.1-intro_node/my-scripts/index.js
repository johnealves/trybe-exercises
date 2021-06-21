// Crie um arquivo index.js que pergunta qual script deve ser executado
// O script deve ser acionado através do comando npm start .
// Utilize o readline-sync para realizar o input de dados
// Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
// Ao digitar o número de um script e pressionar enter , o script deve ser executado.
// Você pode utilizar o require para executar o script em questão.

const readline = require("readline-sync");
const imcCalc = require("./imc");
const velocity = require("./velocidade");
const luckNumber = require("./sorteio");


function start() {
  console.log(" 1 - Imc");
  console.log(" 2 - velocidade");
  console.log(" 3 - Sorteio");


  const script = readline.question("Qual scpript deve ser executado? (1, 2 ou 3)");

  switch (script) {
  case "1":
    imcCalc();
    break;
  case "2":
    velocity();
    break;
  case "3":
    luckNumber();
    break;
  default:
     console.log("Escolha um 1, 2 ou 3 para executar")
  }
}

start();
