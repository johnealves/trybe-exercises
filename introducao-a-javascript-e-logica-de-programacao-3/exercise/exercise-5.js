let n = 9;
let form = [];
let centro = Math.ceil(n/2);
let contador = 0;

for(let k = 1; k <= n; k += 1) {
    if(k % 2 === 0) {
        for(let index = 0; index < n; index += 1) {
            form += ' ';
        }
        console.log(form)
        form = [];
        contador += 1
    } else if (k === n) {
        for(let index = 0; index < n; index += 1) {
            form += '*';
        }
        console.log(form)
        form = [];
    }else if (k === 1){
        for(let index = 1; index <= n; index +=1) {
            if (index === centro) {
                form += '*';
            } else {
                form += ' ';
            }
        }
        console.log(form);
        form = [];
    } else {
        
        for(let index = 1; index <= n; index += 1) {
            if (index === centro-(contador) || index === centro+(contador)){
                form += '*';
            } else{
                form += ' ';
            }
            
        }
        console.log(form);
        form = [];
    }
}