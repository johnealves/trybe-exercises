//3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let form = [];

for(let k = 1; k <= n; k += 1) {
    for(let index = 0; index < n; index +=1) {
        if (index >= (n - k)) {
            form += '*';
        } else {
            form += ' ';
        }
    }
    console.log(form);
    form = [];
}