

// const divImg = document.querySelector('#img');
// const button = document.querySelector('#button')
// button.addEventListener('click', () => {
//     divImg.innerHTML = ' ';
//     ramdomImage()
//   })
  
//   function createImage(sourceImage) {
//       const dogImg = document.createElement('img');
//       dogImg.style.height = '300px';
//       dogImg.style.width = '300px';
//       dogImg.src = sourceImage;
//       divImg.appendChild(dogImg);
//     }
const fetch = require('node-fetch');

const dog_api = 'https://dog.ceo/api/breeds/image/random';
    
const ramdomImage = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(object => object.message)
            .catch(error => `${error}: imagem não encontrada`)
}

module.exports = { ramdomImage };