// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

function exercicio1(a, b, c) {
  const promise =  new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject(Error("Informe apenas números"));

    const resultado = (a + b) * c;
    
    if (resultado < 50) reject(Error("Valor muito baixo"));

    resolve(`O resultado é ${resultado}`)
  })

  return promise;
}

const randomNum = () => Math.ceil(Math.random() * 10)

exercicio1(randomNum(), randomNum(), randomNum())
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));