let nome = 'Cavalo';
nome = 'raiNha';


let peca = nome.toLowerCase(); 

switch(peca) {
    case 'bispo':
        console.log('diagonais');
        break;
    case 'cavalo':
        console.log('em "L"');
        break;
    case 'torre':
        console.log('para frente para trás e para os lados');
        break;
    case 'rainha':
        console.log('para todos os lados');
        break;
    case 'rei':
        console.log('para todos os lados, porem somente uma casa');
        break;
    case 'peão':
        console.log('so anda para frente uma casa por vez e so toma pedras na diagonal');
        break;    
    default:
        console.log('erro')
}        