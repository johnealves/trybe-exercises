//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

for(let contador = 1; contador < numbers.length; contador += 1)
    for(let index=0; index < numbers.length - contador; index += 1) {
        if (numbers[index] > numbers[index + 1]) {
            let aux = numbers[index];
            numbers[index] = numbers[index + 1];
            numbers[index + 1] = aux;
        }
    }
console.log(numbers)