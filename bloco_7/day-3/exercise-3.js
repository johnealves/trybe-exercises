const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (array) => {
  let somatorio = 0;
  for (let index = 0; index < array.length; index += 1) {
    somatorio += array[index]
  }
  return somatorio;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);