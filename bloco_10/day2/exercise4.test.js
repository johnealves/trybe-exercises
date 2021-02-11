const { it, expect } = require('@jest/globals');
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

it('search repositiry on GitHub', async () => {
  const list = await getRepos('https://api.github.com/orgs/tryber/repos')
  expect(list.includes('sd-01-week4-5-project-todo-list')).toBeTruthy();
  expect(list.includes('sd-01-week4-5-project-meme-generator')).toBeTruthy();
});