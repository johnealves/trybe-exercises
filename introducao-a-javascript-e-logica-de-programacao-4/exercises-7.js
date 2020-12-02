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

checkEndingOfString('johne', 'one')
console.log(status)