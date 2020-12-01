//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let nome = 'tenet';
let verif = 0;
let resultado;

function identificadorDePalindromo(nome) {
  for(let index = 0; index < nome.length; index += 1) {
    if (nome[index] !== nome[(nome.length - 1) - index]) {
      verif += 1
    }
  }
  if(verif > 0) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado
}

identificadorDePalindromo('arara')

console.log(resultado)
console.log(' ')
