let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1
for(let c=0; c<numbers.length; c++){
    console.log(numbers[c]);
}

//exercises 2
let soma = 0;
for(let c=0; c<numbers.length; c++){
    soma += numbers[c];
}
console.log(`A soma total é ${soma}`)

//exercises 3
let media = soma/numbers.length
console.log(`A media é ${media}`)

//exercises 4
if(media > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}

//exercises 5
let maior = 0;
for(c=0; c < numbers.length; c++) {
    if (numbers[c] > maior) {
        maior = numbers[c]
    }
}
console.log(`O maior numero é ${maior}`)

//exercises 6
let impar = 0;
for(c=0; c<numbers.length; c++) {
    if(numbers[c]%2 != 0) {
        impar += 1
    }
}
if(impar == 0) {
    console.log('nenhum valor encontrado')
} else {
console.log(`o numero de valores impares ${impar}`)
}

//exercises 7
let menor = numbers[0];
for(c=0; c < numbers.length; c++) {
    if (numbers[c] < menor) {
        menor = numbers[c]
    }
}
console.log(`O menor valor é ${menor}`)

//exercises 8
let numeros = [];
for(c=1; c<=25; c++){
    numeros.push(c)
}
console.log(`numeros = ${numeros}`)

//exercises 9
let numerosRes = []
for(index=0; index < numeros.length; index++) {
    numerosRes.push(numeros[index]/2 + '')
}
console.log(numerosRes)