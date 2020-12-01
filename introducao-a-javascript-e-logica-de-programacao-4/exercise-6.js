// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N

let n = 5;
let sum = 0;

function somatorio(n) {
  for (index = 0; index < n; index += 1){
    let number = index + 1;
    sum += number
  }
  return sum
}

somatorio(5)
console.log('O somatorio é ' + sum)