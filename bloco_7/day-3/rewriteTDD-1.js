const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  const newArray = [];

  for (const person in people) {
    newArray.push(`Hello ${people[person]}`);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(typeof greetPeople, 'function')
assert.deepStrictEqual(greetPeople(parameter), result);