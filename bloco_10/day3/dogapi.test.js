const api = require('./dogapi')


const dogApi = jest.spyOn(api, 'ramdomImage');
afterEach(() => dogApi.mockReset);

it('interpretar que a requisição se resolveu e teve como valor "request sucess"', async () => {
  dogApi.mockResolvedValue('request sucess');

  expect(dogApi()).resolves.toBe('request sucess');
  expect(dogApi).toHaveBeenCalled();
  expect(dogApi).toHaveBeenCalledTimes(1);
});


it('interpretar que a requisição falhou e ter como valor "request failed"', () => {
  dogApi.mockRejectedValue('request failed')

  expect(dogApi()).rejects.toBe('request failed')
  expect(dogApi).toHaveBeenCalled();
  expect(dogApi).toHaveBeenCalledTimes(2);
});