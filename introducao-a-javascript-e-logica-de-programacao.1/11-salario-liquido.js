let salario = 3500.00;
let salarioReduzido = 0;
let salarioLiquido = 0;
let IR = 0;

if (salario > 5189.89) {
    salarioReduzido = salario - 570.88;
} else if (salario > 2594.93) {
    salarioReduzido = salario * 0.89
} else if (salario > 1556.95) {
    salarioReduzido = salario * 0.91
} else {
    salarioReduzido = salario * 0.92
}

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

console.log(`R$ ${salarioLiquido}`)