let n = 20;
let naoPrimo = 0;

for(let index = 2; index < n; index += 1) {
    if (n % index === 0) {
        naoPrimo += 1
    }
}

if (naoPrimo === 0) {
    console.log('numero primo')
} else {
    console.log(`numero não é primo`)
}