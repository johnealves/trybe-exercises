let salario = 3000.00;
let salarioReduzido = 0;
let salarioLiquido = 0;
let IR = 0;
let faixa1 = 78.38;
let faixa2 = 94.01;
let faixa3 = 125.38;
let faixaSalario
let INSS = 0;
//Desução INSS

if (salario > 6101.06) {
    INSS = 713.09
    salarioReduzido = salario - 713.09;
} else if (salario >= 3134.41) {
    faixaSalario = salario - 3134.41;
    INSS = faixa1 + faixa2 + faixa3 + (faixaSalario*0.14);
    salarioReduzido = salario - INSS;
} else if (salario >= 2089.61) {
    faixaSalario = salario - 2089.61;
    INSS = faixa1 + faixa2 + (faixaSalario*0.12);
    salarioReduzido = salario - INSS;
} else if (salario >= 1045.01) {
    faixaSalario = salario - 1045.01;
    INSS = faixa1 + (faixaSalario*0.09);
    salarioReduzido = salario - INSS;
} else if (salario < 1045.01) {
    INSS = salario * 0.075;
    salarioReduzido = salario - INSS;
}




// Dedução do IR
if (salarioReduzido > 4664.68) {
    IR = (0.275 * salarioReduzido) - 869.36;
    salarioLiquido = salarioReduzido - IR;
} else if (salarioReduzido >= 3751.06) {
    IR = (0.225 * salarioReduzido) - 636.13;
    salarioLiquido = salarioReduzido - IR;
} else if (salarioReduzido >= 2826.66) {
    IR = (0.15 * salarioReduzido) - 354.80;
    salarioLiquido = salarioReduzido - IR;
} else if (salarioReduzido >= 1903.99) {
    IR = (0.075 * salarioReduzido) - 142.80;
    salarioLiquido = salarioReduzido - IR;
} else {
    IR = 0;
    salarioLiquido = salarioReduzido - IR;
}



console.log(`O valor do INSS foi de R$ ${INSS}`);
console.log(`O valor após o desconto do INSS é de R$ ${salarioReduzido}`);
console.log(`O valor do Imposto de Renda é de R$ ${IR}`);
console.log(`O valor do salario após os impostos é de R$ ${salarioLiquido}`);