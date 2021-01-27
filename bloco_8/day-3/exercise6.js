
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage(students, grades) {
  // escreva seu código aqui
  const notas = grades.map((value) => {
    const somaNota = value.reduce((acc, notaAtual) => acc + notaAtual);
    return somaNota / value.length;
  });
  const notaDosEstudantes = students.reduce((acc, value, index) => {
     return acc.concat({name: value, average: notas[index]});
  }, [])
  return notaDosEstudantes;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(students, grades), expected);