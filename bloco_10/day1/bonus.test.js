const searchEmployee = require('./bonus');
describe('verifica função searchEmployee', () => {
  test('verifica se é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('verifica erro por id não encontrado', () => {
    expect(() => {searchEmployee('1234-5', 'firstName')}).toThrow(/ID não identificada/);
  });
  test('verifica retorno de funcionario e informação solicitada', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual('id: 4678-2, especialidade: Backend');
  });
  test('verifica retorno de funcionario e informação solicitada', () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual('id: 1256-4, especialidade: Hooks,Context API,Tailwind CSS');
  });
});