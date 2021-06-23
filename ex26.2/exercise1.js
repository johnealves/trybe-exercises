// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function exercicio1(a, b, c) {
  const promise =  new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject(Error("Informe apenas números"));

    const resultado = (a + b) * c;
    
    if (resultado < 50) reject(Error("Valor muito baixo"));

    resolve(`O resultado é ${resultado}`)
  })

  return promise;
}

exercicio1(1, 5, 5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));