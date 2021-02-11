let fetchJoke = require('./bonus');

test('verifica sucesso da chamada', () => {
  fetchJoke = jest.fn().mockResolvedValue('Whiteboards ... are remarkable.');

  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});

test('verifica falha na chamada', () => {
  fetchJoke = jest.fn().mockRejectedValue('Whiteboards ... are remarkable.');

  expect(fetchJoke()).rejects.toBe('Whiteboards ... are remarkable.');
})