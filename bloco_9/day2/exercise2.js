const promise = new Promise((resolve, reject) => {
  const numbers = [25, 44, 15, 28, 05, 42, 30, 17, 24, 16];
  const square = numbers.map(num => Math.pow(num, 2));
  const sum = square.reduce((acc, value) => acc + value);
  const divisores = [2, 3, 5, 10]
  if (sum < 8000) {
    const divSquare = divisores.map((value) => sum / value);
    resolve(divSquare);
  } else {
    reject("É mais de oito mil! Essa promise deve estar quebrada!");
  }
})
.then(msg => msg)
.then(array => console.log(array.reduce((acc, value) => acc + value)))
.catch(erro => console.log(erro))
