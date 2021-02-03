const API_URL = 'https://icanhazdadjoke.com/';



const fetchJoke = () => {
  // Adicionar lógica aqui!const 
  const h2 = document.getElementById('jokeContainer')
  myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => h2.innerHTML = data.joke);
};

window.onload = () => fetchJoke();