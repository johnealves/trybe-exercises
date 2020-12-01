
let menorValor;
let indice;

 function indiceMaiorValor(array) {
  indice = 0
  menorValor = array[0];
  for(index = 0; index < array.length; index += 1) {
    
    if (array[index] < menorValor) {
      menorValor =  array[index];
    }
  }
  indice = array.indexOf(menorValor)

  return indice;
 }

indiceMaiorValor([-20, -40, -60, 7, 10, 0, -3])

console.log('O indice do menor valor é '+ indice);
console.log('O menor valor é '+menorValor)