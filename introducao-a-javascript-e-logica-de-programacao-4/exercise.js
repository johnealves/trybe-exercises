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

let nome = 'arara'
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