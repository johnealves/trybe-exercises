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

const selectState = document.getElementById('select-state');
function optionStates () {
  for (let index = 0; index < estado.length; index += 1) {
    const opt = document.createElement('option');
    opt.innerHTML = estado[index];
    opt.value = estado[index]
    selectState.appendChild(opt);
  }
}
optionStates();

const result = document.getElementById('data')


document.getElementById('enviar').addEventListener('click', function (event) {
  const inputName = document.getElementById('name').value;
  event.preventDefault();
  result.style.display = 'block';
  const textName = document.createElement('p');
  textName.innerHTML = `Nome: ${inputName}`;
  textName.className = 'layout-resume';
  result.appendChild(textName);
});

function reloadPage () {
  window.location.reload()
}