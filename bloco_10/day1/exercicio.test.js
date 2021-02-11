const { test, expect } = require('@jest/globals');
const { sum, myRemove } = require('./exercicios');

describe('verifica soma dos paramentros', () => {
  test('verifica que soma de 4 e 5 é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  test('verifica que soma de 4 e 5 é 9', () => {
    expect(sum(0,0)).toBe(0);
  });
  test('verifica erro com parametro string', () => {
    expect(() => {sum(4,'5')}).toThrow(/parameters must be numbers/)
  });
});

describe('testa função myRemove', () => {
  const arr = [1, 2, 3, 4]
  test('verifica se chamada retorna array esperado', () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });
  test('verifica se myRemove não retorna arrai esperado', () => {
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4])
  });
  test('verifica se chamada retorna array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(arr);
  });
  test('verifica se chamada retorna array esperado', () => {
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});
