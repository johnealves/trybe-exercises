// Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

// function characters(array) {
//   array.forEach((value) => console.log(`${value.id} - ${value.name}`))
// };

// characters("./simpsons.json");

const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((file) => JSON.parse(file))
//   .then((result) => result.forEach((value) => console.log(`${value.id} - ${value.name}`)))

// async function getSimpsonById(id) {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((simpsons) => JSON.parse(simpsons));

//   const selectedSimpson = simpsons.find((simpson) => simpson.id == id)
  
//   console.log(selectedSimpson)
// }

function getSimpsonById(id) {
  const promise = new Promise((resolve, reject) => {
    const simpson = fs.readFile("./simpsons.json", "utf8")
      .then(response => JSON.parse(response))
      .then(result => result.find((simpson) => simpson.id === id));

      resolve(promise)
  })
  return promise
}

getSimpsonById("5")
  .then(response => console.log(response))
  .catch(error => console.log("id não encontrado"))