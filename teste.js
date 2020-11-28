let numbers = [5, 9, 3, 19, 70, 8, 2, 35, 27];
let media = 0;
let soma = 0;
for (i in numbers){
  soma += numbers[i];
}

media = soma/numbers.length;

media > 20? console.log("valor maior que 20"): console.log("valor menor ou igual a 20"); 