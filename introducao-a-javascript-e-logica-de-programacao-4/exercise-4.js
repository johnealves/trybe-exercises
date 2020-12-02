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
