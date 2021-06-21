// Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
// Considere a seguinte tabela para classificar a situação do IMC:
// Copiar
// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |

const readline = require("readline-sync");

const imcCalc = () => {
  const height = readline.questionInt("Qual a sua altura? ");
  const weight = readline.questionFloat("Qual o seu peso? ");
  const imc = ((weight / Math.pow(height, 2)) * 10000).toFixed(1);

  if (imc >= 40) {
    console.log(`imc = ${imc}, Obesidade graus III e IV `);
    return;
  } else if (imc >= 35 ) {
    console.log(`imc = ${imc}, Obesidade grau II `);
    return;
  } else if (imc >= 30) {
    console.log(`imc = ${imc}, Obesidade grau I `);
    return;
  } else if (imc >= 25) {
    console.log(`imc = ${imc}, Acima do peso (sobrepeso) `);
    return;
  } else if (imc >= 18.5) {
    console.log(`imc = ${imc}, Peso normal `);
    return;
  } else {
    console.log(`imc = ${imc}, Abaixo do peso (magreza) `);
    return;
  }
}

module.exports = imcCalc;



// 3 - Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
// Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .

