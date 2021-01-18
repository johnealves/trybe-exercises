const assert = require("assert");

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let contador = 1;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results[i] = contador;
      contador += 1;
    } else {
      results[i] = characters[i];
    }
  }
  let result = '';
  for (let index = 0; index < results.length; index +=1) {
    result += results[index]; 
  }

  return result;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(typeof removeVowels, 'function')
assert.deepStrictEqual(removeVowels(parameter), result)