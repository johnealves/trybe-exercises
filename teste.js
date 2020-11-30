let n = 15;

if (n > 1) {
  for (let index = 0; index < n + 1; index +=1){
    if (index % 2 === 1) {

      for (let indexcount = 0; indexcount < index; indexcount++) {
        if (index === n) {
          phrase += '*';
        }else {
          if (indexcount === 0 || indexcount === index -1) {
            phrase += '*';
          } else {
            phrase += ' ';
          }
        }
      }
    
      for (let indexcount = 0; indexcount < (n - index) / 2; indexcount += 1) {
        phrase2 += ' ';
      }
      console.log(phrase2 + phrase + phrase2)
    }
    phrase = '';
    phrase2 = '';
  }
}