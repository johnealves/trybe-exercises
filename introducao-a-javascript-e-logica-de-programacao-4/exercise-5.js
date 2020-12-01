// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayInt = [2, 3, 2, 5, 8, 2, 3];

let valorQueMaisSeRepete = ' ';
let elementoMaisCheio = ' ';
let grupo = {
  
}


function contaValoresRepetidos(arrayInt) {
  let array = arrayInt.sort()
  let count = 1;

  grupo['chave'+ count] = array[0]
  for(index = 0; index < array.length -1; index += 1) {
    if(array[index] === array[index+1]) {
      grupo['chave'+ count] += `${array[index+1]}`;
    } else {
      count += 1;
      grupo['chave'+ count] = `${array[index+1]}`
    }
  }
 
  return valorQueMaisSeRepete;
}

contaValoresRepetidos([2, 3, 2, 5, 8, 2, 3])
console.table(grupo)
console.log('O valor que mais se repete é ' + valorQueMaisSeRepete)
console.log(grupo.chave1.length)