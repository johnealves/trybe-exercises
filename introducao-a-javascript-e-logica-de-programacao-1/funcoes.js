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

//movimento das peças de xadrez
let nome = 'Cavalo';
nome = 'rainha'
let peca = nome.toLowerCase(); 
let moviment;


function movimentChess(peca) {
    switch(peca) {
        case 'bispo':
            moviment = 'diagonais';
            break;
        case 'cavalo':
            moviment = 'em "L"';
            break;
        case 'torre':
            moviment = 'para frente para trás e para os lados';
            break;
        case 'rainha':
            moviment = 'para todos os lados';
            break;
        case 'rei':
            moviment = 'para todos os lados, porem somente uma casa';
            break;
        case 'peão':
            moviment = 'so anda para frente uma casa por vez e so toma pedras na diagonal';
            break;    
        default:
            moviment = 'erro'
    } 
    return moviment
}

movimentChess(peca)
console.log(moviment)

//notas de A a F
let nota = 95;
let resultadoBoletim

function boletim(nota) {
    if (nota >= 90 ) {
        resultadoBoletim = 'nota A';
    } else if (nota >= 80){
        resultadoBoletim = 'nota B';
    } else if (nota >= 70){
        resultadoBoletim = 'nota C';
    } else if (nota >= 60){
        resultadoBoletim = 'nota D';
    } else if (nota >= 50){
        resultadoBoletim = 'nota E';
    } else {
        resultadoBoletim = 'nota F';
    }

    return resultadoBoletim
}

boletim(nota)
console.log(resultadoBoletim)

//função lucro sobre vendas
let valorCusto = 6;
let aliquota = 0.25;
let imposto;
let valorVenda = 10;
let numeroDeVendas = 2000;
let resultadoFinanceiro;
let custoUnitario
let custoTotal;
let receitaTotal
let lucroTotal;

function lucroSobreVendas(numeroDeVendas, valorCusto, valorVenda, aliquota) {
    imposto = aliquota * valorCusto
    custoTotal = valorCusto + imposto;
    lucro = valorVenda - custoTotal;
    lucroTotal = lucro * numeroDeVendas;


    return lucroTotal;
}

lucroSobreVendas(numeroDeVendas, valorCusto, valorVenda, aliquota)

console.log(lucroTotal)

//Salario Liquido
let salario = 3000.00;
let salarioAposINSS;
let faixa1 = 78.38;
let faixa2 = 94.01;
let faixa3 = 125.38;

function cauculoDeDeducaoINSS (salario) {
    if (salario > 6101.06) {
        INSS = 713.09
        salarioAposINSS = salario - 713.09;
    } else if (salario >= 3134.41) {
        faixaSalario = salario - 3134.41;
        INSS = faixa1 + faixa2 + faixa3 + (faixaSalario*0.14);
        salarioAposINSS = salario - INSS;
    } else if (salario >= 2089.61) {
        faixaSalario = salario - 2089.61;
        INSS = faixa1 + faixa2 + (faixaSalario*0.12);
        salarioAposINSS = salario - INSS;
    } else if (salario >= 1045.01) {
        faixaSalario = salario - 1045.01;
        INSS = faixa1 + (faixaSalario*0.09);
        salarioAposINSS = salario - INSS;
    } else if (salario < 1045.01) {
        INSS = salario * 0.075;
        salarioAposINSS = salario - INSS;
    }


    return salarioAposINSS
}

cauculoDeDeducaoINSS(salario)


function calculoImpostoDeRenda (salario) {
    if (salario > 4664.68) {
        IR = (0.275 * salario) - 869.36;
        salarioAposImpostos = salario - IR;
    } else if (salario >= 3751.06) {
        IR = (0.225 * salario) - 636.13;
        salarioAposImpostos = salario - IR;
    } else if (salario >= 2826.66) {
        IR = (0.15 * salario) - 354.80;
        salarioAposImpostos = salario - IR;
    } else if (salario >= 1903.99) {
        IR = (0.075 * salario) - 142.80;
        salarioAposImpostos = salario - IR;
    } else {
        IR = 0;
        salarioAposImpostos = salario - IR;
    }


    return salarioAposImpostos
}

calculoImpostoDeRenda(cauculoDeDeducaoINSS())

console.log(`O valor do INSS foi de R$ ${INSS}`);
console.log(`O valor após o desconto do INSS é de R$ ${salarioAposINSS}`);
console.log(`O valor do Imposto de Renda é de R$ ${IR}`);
console.log(`O valor do salario após os impostos é de R$ ${salarioAposImpostos}`);