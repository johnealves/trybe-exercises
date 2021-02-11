// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const { it, expect, afterEach } = require('@jest/globals');
// const { describe } = require('yargs');
const change = require('./exercise2');

// jest.mock('./exercise2');

// describe('testa mocks das funções de transformação', () => {
//   it('implemeta upperCase, agora retorna a string em caixa baixa', () => {
//     change.upperCase.mockImplementation((word) => word.toLowerCase());

//     expect(change.upperCase('Johne')).toBe('johne');
//     expect(change.upperCase).toHaveBeenCalled();
//     expect(change.upperCase).toHaveBeenCalledTimes(1);
//   });
// });

// describe('testa mocks das funções de transformação', () => {
//   it('implemeta upperCase, agora retorna a string em caixa baixa', () => {
//     change.firstLatter.mockImplementation((word) => word[word.length-1]);

//     expect(change.firstLatter('Johne')).toBe('e');
//     expect(change.firstLatter).toHaveBeenCalled();
//     expect(change.firstLatter).toHaveBeenCalledTimes(1);
//   });
// });

// describe('testa mocks das funções de transformação', () => {
//   it('implemeta upperCase, agora retorna a string em caixa baixa', () => {
//     change.concatStrings.mockImplementation((word1, word2, word3) => word1 + word2 + word3);

//     expect(change.concatStrings('Johne', 'Alves', 'Trybe')).toBe('JohneAlvesTrybe');
//     expect(change.concatStrings).toHaveBeenCalled();
//     expect(change.concatStrings).toHaveBeenCalledTimes(1);
//   });
// });

describe('testa mocks das funções de transformação', () => {
  it('implemeta upperCase, agora retorna a string em caixa baixa', () => {
    const spyUpperCase = jest.spyOn(change, 'upperCase').mockImplementation((word) => word.toLowerCase())
    

    expect(spyUpperCase('Johne')).toBe('johne');
    expect(spyUpperCase).toHaveBeenCalled();
    expect(spyUpperCase).toHaveBeenCalledTimes(1);

    change.upperCase.mockRestore();

    expect(change.upperCase('Johne')).toBe('JOHNE');
  });
});