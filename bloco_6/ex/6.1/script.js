// estado = {   
//     'AC': 'Acre',
//     'AL': 'Alagoas',
//     'AP': 'Amapá',
//     'AM': 'Amazonas',
//     'BA': 'Bahia',
//     'CE': 'Ceará',
//     'DF': 'Distrito Federal',
//     'ES': 'Espírito Santo',
//     'GO': 'Goías',
//     'MA': 'Maranhão',
//     'MT': 'Mato Grosso',
//     'MS': 'Mato Grosso do Sul',
//     'MG': 'Minas Gerais',
//     'PA': 'Pará',
//     'PB': 'Paraíba',
//     'PR': 'Paraná',
//     'PE': 'Pernambuco',
//     'PI': 'Piauí',
//     'RJ': 'Rio de Janeiro',
//     'RN': 'Rio Grande do Norte',
//     'RS': 'Rio Grande do Sul',
//     'RO': 'Rondônia',
//     'RR': 'Roraíma',
//     'SC': 'Santa Catarina',
//     'SP': 'São Paulo',
//     'SE': 'Sergipe',
//     'TO': 'Tocantins'
// }

const estado = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const estadoSel = document.getElementById('estado-form');

for (let index = 0; index < estado.length; index += 1) {
  const est = document.createElement('option')
  est.innerHTML = estado[index];
  estadoSel.appendChild(est)
}

