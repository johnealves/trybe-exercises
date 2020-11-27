//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for(let contador = 1; contador < numbers.length; contador += 1)
    for(let index=0; index < numbers.length - contador; index += 1) {
        if (numbers[index] < numbers[index + 1]) {
            let aux = numbers[index];
            numbers[index] = numbers[index + 1];
            numbers[index + 1] = aux;
        }
    }
console.log(numbers)