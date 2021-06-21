// Crie um script que realize o fatorial de um número n .
// O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.
// Armazene o script no arquivo fatorial.js .
// Utilize o readline-sync para realizar o input de dados.
// O script deve ser acionado através do comando npm run fatorial
// Adicione o script ao menu criado no exercício 5.
// Adicione validações para garantir que o valor informado seja um inteiro maior que 0.

const readline = require("readline-sync");

const fatorial = () => {
  console.log("----------------------------------------------------------------");
  let num = readline.questionFloat("Informe um numero para calcular o fatorial: ");
  console.log("----------------------------------------------------------------");
  let result = 1;

  if (Number.isInteger(num)) {
    for (let index = 1; index <= num; index += 1) {
      result = result * index
    }
    console.log("----------------------------------------------------------------");
    console.log(`O fatorial do numero ${num} é igual a ${result}`);
    console.log("----------------------------------------------------------------");
    return;
  } else {
    console.log("----------------------------------------------------------------");
    console.log("por favor informe um numero inteiro");
    console.log("----------------------------------------------------------------");
    fatorial();
  };
}

fatorial()

// module.exports = fatorialCalc;
