let a = 30;
let b = 60;
let c = 90;
let somaAngulo = a + b + c;

if(a > 0 && b > 0 && c > 0){
    if(somaAngulo == 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('erro');
}