let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log('Bem vinda ' + info.personagem)

//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

info['recorrente'] = 'sim';

console.log('Recorrente? ' + info.recorrente)
console.log(' ')

//Faça um for/in que mostre todas as chaves do objeto.

for(index in info) {
  console.log(info[index])
}
console.log(' ')

let info_2 = {
  nome: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'sim',
} 

for(index in info_2) {
  console.log(info_2[index])
}
console.log(' ');

//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let nome = 'brasil';
let verif = 0;
let resultado;

function identificadorDePalindromo() {
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

identificadorDePalindromo(nome)

console.log(resultado)
console.log(' ')

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayTest = [2, 3, 6, 7, 10, 1];

let indice = 0;

 function indiceMaiorValor(array) {
  for(index = 0; index < array.length; index += 1) {
    if (array[index] < array[index + 1]) {
      indice =  index + 1;
    }
  }

  return indice;
 }

indiceMaiorValor([2, 3000, 6, 7, 10, 100])

console.log('O indice do maior valor é '+indice);

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayTest = [2, 4, 6, 7, 10, 0, -3];

let indice = arrayTest[0];

 function indiceMaiorValor(array) {
  
  for(index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1]) {
      indice =  index + 1;
    }
  }

  return indice;
 }

indiceMaiorValor(arrayTest)

console.log('O indice do menor valor é '+indice);

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayNomes = ['Jose', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let moreCaracter = 'a';
let nome;
let nome2;


function maisCaracteres(arrayNomes) {
  for(index = 0; index < arrayNomes.length; index += 1) {
    if (arrayNomes[index].length > moreCaracter.length) {
      moreCaracter = arrayNomes[index]
    }

  }
  return moreCaracter
}

maisCaracteres(arrayNomes)
console.log('O nome com mais caracteres é '+ moreCaracter)

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayInt = [2, 3, 2, 5, 8, 2, 3];
let arrayOrdenado = arrayInt.sort()
let valorQueMaisSeRepete = ' ';
let elementoMaisCheio = ' ';
let grupo = {
  
}

console.log(arrayOrdenado)
function contaValoresRepetidos(array) {
  let count = 1;

  grupo['elemento'+ count] = array[0]
  for(index = 0; index < array.length -1; index += 1) {
    if(array[index] === array[index+1]) {
      grupo['elemento'+ count] += `${array[index+1]}`;
    } else {
      count += 1;
      grupo['elemento'+ count] = `${array[index+1]}`
    }
  }
  

  return valorQueMaisSeRepete
}

contaValoresRepetidos(arrayOrdenado)
console.table(grupo)
console.log('O valor que mais se repete é ' + valorQueMaisSeRepete)

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

somatorio(n)
console.log('O somatorio é ' + sum)

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
let word = 'escola';
let ending = 'sola';
let count = 0;
let status;
let verif = 0;

function checkEndingOfString(word, ending) {
  for(index = (ending.length -1); index >= 0; index -= 1){
    if(ending[(ending.length-1) - count] !== word[(word.length-1) - count]) {
      verif += 1;
    }
    count += 1
  }
  if(verif > 0) {
    status = false;
  } else {
    status = true;
  }

  return status;
}

checkEndingOfString(word, ending)
console.log(status)