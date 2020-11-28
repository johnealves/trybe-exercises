//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let form = [];
let centro = Math.ceil(n/2);
let contador = 1;

for(let k = 1; k <= n; k += 1) {
    if(k % 2 === 0) {
        for(let index = 0; index < n; index += 1) {
            form += ' ';
        }
        form = [];
        contador += 1
    }else {
        for(let index = 1; index <= n; index +=1) {
            if ( index > centro-(contador) && index < centro+(contador) || index === centro ) {
                form += '*';
            } else {
                form += ' ';
            }
        }
        console.log(form);
        form = [];
    }
}
