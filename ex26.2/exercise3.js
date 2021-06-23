// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

function doMath(a, b, c) {
  const promise =  new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject(Error("Informe apenas números"));

    const resultado = (a + b) * c;
    
    if (resultado < 50) reject(Error("Valor muito baixo"));

    resolve(`O resultado é ${resultado}`)
  })

  return promise;
}

const randomNum = () => Math.ceil(Math.random() * 10)

const randomNumbers = [randomNum(), randomNum(), randomNum()];
console.log(randomNumbers)

async function callDoMath() {
  try {
    const result = await doMath(...randomNumbers)
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

callDoMath();

// const randomNum = () => Math.ceil(Math.random() * 10)

// exercicio1(randomNum(), randomNum(), randomNum())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));