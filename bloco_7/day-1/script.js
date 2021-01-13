const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const order = oddsAndEvens.sort((a, b) => a - b);

// console.log(`Os números ${order} se encontram ordenados de forma crescente!`);

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.

const fatorial = num => {
  let fat = 1;
  for (let index = num; index > 0; index -= 1) {
    fat = index * fat
  }
  return fat;
}

const biggestWord = frase => {
  const words = frase.split(' ')
  console.log(words)
}
biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu")