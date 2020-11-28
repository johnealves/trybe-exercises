//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5
let form = [];
let centro = Math.ceil(n/2);

for(let k = 1; k <= n; k += 1) {
    if(k % 2 === 0) {
        for(let index = 0; index < n; index += 1) {
            form += ' ';
        }
        console.log(form)
        form = [];
    }else {
        for(let index = 1; index <= n; index +=1) {
            if ( index > centro-(k-1) && index < centro+(k-1) || index === centro ) {
                form += '*';
            } else {
                form += ' ';
            }
        }
        console.log(form);
        form = [];
    }
}
