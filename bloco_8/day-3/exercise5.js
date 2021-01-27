
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA(names) {
  // escreva seu código aqui
  return names
  .join()
  .split('')
  .reduce((acc, value) => (value === 'a' || value === 'A')?acc +1:acc, 0);
}

assert.deepStrictEqual(containsA(names), 20);