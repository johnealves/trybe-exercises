const assert = require('assert');

const greaterThanTen = (array) => {
  let results = 0;
  let result = []
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      result.push(array[i]);
    }
  }
  return result;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(typeof greaterThanTen, 'function')
assert.deepStrictEqual(greaterThanTen(parameter), result)