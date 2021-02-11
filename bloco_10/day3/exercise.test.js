const { it, expect } = require('@jest/globals');
let ramdomNumber = require('./exercise');

describe('testes para ramdomNumber', () => {
  it('retorno padrão igual a 10', () => {
    ramdomNumber = jest.fn().mockReturnValue(10)

    expect(ramdomNumber()).toBe(10);
    expect(ramdomNumber).toHaveBeenCalled();
    expect(ramdomNumber).toHaveBeenCalledTimes(1);
  });

  it('cria impletação divisão', () => {
    ramdomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(ramdomNumber(10, 5)).toBe(2);
    expect(ramdomNumber).toHaveBeenCalled();
    expect(ramdomNumber).toHaveBeenCalledTimes(1);
  });

  it('implementação que receba três parâmetros e retorne sua multiplicação', () => {
    ramdomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(ramdomNumber(1, 2, 3)).toBe(6);
    expect(ramdomNumber).toHaveBeenCalled();
    expect(ramdomNumber).toHaveBeenCalledTimes(1);

    ramdomNumber.mockReset();
    ramdomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(ramdomNumber(4)).toBe(8);
    expect(ramdomNumber).toHaveBeenCalled();
    expect(ramdomNumber).toHaveBeenCalledTimes(1);
  });
});
