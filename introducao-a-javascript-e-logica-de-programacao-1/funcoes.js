let x = 9
let y = 3;
let z = 15

let sum;
let sub;
let mult;
let div;
let resDiv;

function addition(a, b) {
  sum = a + b

  return sum;
}

addition(x, y)
console.log(`A soma dos valores é ${sum}`);
 
function subtraction(a, b) {
    sub = a - b

    return sub
}

subtraction(x, y)
console.log(`A subtração de a - b é ${sub}`);

function multiplication (a, b) {
  mult = a * b

  return mult
}

multiplication(x ,y)
console.log(`O resultado da multipĺicação é ${mult}`)

function division(a, b) {
  div = a / b

  return div;
}

division(x, y)
console.log(`o resultado da divisão de a por b é ${div}`)

function module(a, b) {
  mod = a % b

  return mod
}

module(x, y) 
console.log(`O resto da divisão de a por b é ${mod}`)
console.log('   ')
//maior de dois numeros
let big2;

function bigger2Numbers(a, b) {
    if (a>b) {
        big2 = a;
    } else {
        big2 = b;
    }
    return big2
}

bigger2Numbers(x, y)
console.log(`o maior entre os dois numeros é ${big2}`)

let big3;

function bigger3Numbers(a, b, c) {
    if(a > b && a > c) {
        big3 = a;
    } else if(b > a && b > c) {
        big3 = b
    } else {
        big3 = c
    }
    return big3
}

bigger3Numbers(x, y, z)
console.log(`o maior entre os tres numeros é ${big3}`)
console.log('  ');

//angulos internos do triangulo
let x = 30;
let y = 60;
let z = 90;
let somaAngulo = x + y + z;
let teste;

function triangle(a, b, c) {
    if(a > 0 && b > 0 && c > 0){
        if(somaAngulo === 180) {
            teste = 'essa figura é um triagulo';
        } else {
            teste = 'essa figura não é um triagulo';
        }
    } else {
        teste = 'erro, verifique os dados informados';
    }
    return teste
}

triangle(x, y, z)
console.log(teste)
console.log(' ');

