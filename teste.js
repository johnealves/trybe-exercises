// let singer = {
//   name: 'Milton',
//   lastName: 'Nascimento',
//   nickname: 'Bituca',
//   age: 77,
//   bestAlbuns: ['Travessia', 'Clube de esquina', 'Minas']
//   bornInfo {
//     city: 'Rio de Janeiro';
//   }
// };

// console.log(`o cantor ${singer.name} ${singer.lastName} possui ${singer.age} anos`)

// console.log(`o cantor ${singer['name']} ${singer['lastName']} possui ${singer['age']} anos`);

// singer['fullName'] = singer.name +' '+ singer.lastName;

// console.table(singer)

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// };

// console.log('a jogadora '+ player.name + ' ' + player.lastName+ ' tem '+ player.age + ' anos de idade')

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

// console.log('A jogadora Marta foi eleira a melhor do mundo ' + player.bestInTheWorld.length + ' vezes.')
// console.log('a jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' de prata') 

let statusCarro = 'deligado';
let aceleracao = 0;
let rotacaoVolante = 0;

function ligarDesligar () {
  if (statusCarro === 'desligado') {
      statusCarro = 'ligado';
  } else {
      statusCarro = 'desligado';
  }
  return statusCarro
}

function acelerar(incremento) {
  aceleracao += incremento

  return 'acelerando a ' + aceleracao + 'm/s'
}

function frear(decremento) {
  aceleracao -= decremento

  return 'acelerando a ' + aceleracao + 'm/s'
}

function girarVolante(rotacao) {
  rotacaoVolante = rotacao;

  return  rotacaoVolante + 'º'; 
}

ligarDesligar();
acelerar(20);
 console.log(aceleracao)