const { upperCase, firstLatter, concatStrings } = require('./exercise2');

spyUppercase = 

describe('testa mocks das funções de transformação', () => {
  it('implemeta upperCase, agora retorna a string em caixa baixa', () => {
    change.upperCase.mockImplementation((word) => word.toLowerCase());

    expect(change.upperCase('Johne')).toBe('johne');
    expect(change.upperCase).toHaveBeenCalled();
    expect(change.upperCase).toHaveBeenCalledTimes(1);
  });
});