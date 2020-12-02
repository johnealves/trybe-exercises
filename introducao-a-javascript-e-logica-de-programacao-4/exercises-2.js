// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 600, 7, 10, 1];
let maiorValor;
let indice;

 function indiceMaiorValor(array) {
     maiorValor = array[0]
     indice = 0;
  for(index = 0; index < array.length; index += 1) {
    if (array[index] > maiorValor) {
      maiorValor = array[index];
    }
  }
  indice = array.indexOf(maiorValor)

  return indice;
 }

indiceMaiorValor([2, 3, 600, 7, 10, 1, 50])

console.log('O indice com maior valor é '+ indice);
console.log(maiorValor)
// Erro !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!