// Exercício 1: 
function createDaysOfTheWeek() {
    const weekDays = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ]
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

function createDaysList() {
    const dezDaysList = [
        29,
        30,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
    ];
    const dayslist = document.querySelector('#days')

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const dayListItem = document.createElement('li');
        dayListItem.className = 'day';
        dayListItem.innerHTML = days;
        if (days === 24 || days === 25 || days === 31) {
            dayListItem.className += ' holiday';
        }
        if (days === 4 || days === 11 || days === 18 || days === 25) {
            dayListItem.className += ' fryday';
        }

        dayslist.appendChild(dayListItem)
    }
}

createDaysList();

// Exercício 2: 

function createButtonHolydays() {
    const buttonContainer = document.querySelector('.buttons-container')
    const holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    holidayButton.innerHTML = 'feriados';
    buttonContainer.appendChild(holidayButton)

}
createButtonHolydays()

// Exercício 3: 

let holidayB = document.querySelector('#btn-holiday')
holidayB.addEventListener('click', changeColor)

function changeColor() {
    const holi = document.querySelectorAll('.holiday');
    for (let index = 0; index < holi.length; index += 1) {
        if (holi[index].style.background !== 'red') {
            holi[index].style.background = 'red';
        } else {
            holi[index].style.background = 'rgb(238,238,238)';
        }
    }
}

// Exercício 4: 
function createdFrydayButton() {
    const frydayButton = document.createElement('button')
    frydayButton.id = 'btn-fryday';
    frydayButton.innerHTML = 'sexta-feira'
    const buttonContainer = document.querySelector('.buttons-container');
    buttonContainer.appendChild(frydayButton)

}
createdFrydayButton()

// Exercício 5: 
let frydayB = document.getElementById('btn-fryday');
frydayB.addEventListener('click', sextou);
let dezFryday = [4, 11, 18, 25]

function sextou() {
    const fryday = document.querySelectorAll('.fryday')
    let textFryday = 'SEXTOU!';
    for (let index = 0; index < fryday.length; index += 1) {
        if (fryday[index].innerHTML !== textFryday) {
            fryday[index].innerHTML = textFryday;
        } else {
            fryday[index].innerHTML = dezFryday[index];
        }
    }
}

// Exercício 6: 

function zoomIn(evento) {
    evento.target.style.transform = 'scale(1.9)'
}
function zoomOut(evento) {
    evento.target.style.transform = 'scale(1)'

}

function zoomMouse() {
    let dezDays = document.querySelectorAll('.day');
    for (let index = 0; index < dezDays.length; index += 1) {
        dezDays[index].addEventListener('mouseover', zoomIn)
        dezDays[index].addEventListener('mouseout', zoomOut)

    }
}
zoomMouse()

// Exercício 7: 
function addTask (tarefa) {
  let myTasks = document.querySelector('.my-tasks');
  let task = document.createElement('span');
  task.innerHTML = tarefa;
  myTasks.appendChild(task);
}
addTask('cozinhar');
  
// Exercício 8:

function addLegend (cor) {
  let myTasks = document.querySelector('.my-tasks');
  let legend = document.createElement('div');
  legend.className = 'task'; 
  legend.style.background = cor;
  myTasks.appendChild(legend);
}
addLegend('blue')
 
// Exercício 9:

function eventClassName () {
  let div = document.querySelector('.task')
  div.addEventListener('click', function() {
    if (div.className !== "task-selected") {
      div.className = "task-selected";
    } else {
      div.className = "task";
    }
  })
}
eventClassName()

// Exercício 10:

function addColor (event) {
  let days = document.querySelectorAll('.day');
  let div = document.querySelector('.my-tasks div')
  if(div.className === 'task-selected'){
    if (event.target.style.color !== 'blue') {
      event.target.style.color = 'blue'
    } else {
      event.target.style.color = 'rgb(119,119,119)'
    }
  }
}
function markTask () {
  let days = document.querySelectorAll('.day');
  for (index = 0; index < days.length; index += 1) {
    days[index].addEventListener('click', addColor)
  }
}
markTask()

// Bônus:

function addTaskList () {
  let list = document.querySelector('.task-list')
  let task = document.getElementById('task-input');
  let taskText = task.value;
  let itemList = document.createElement('li');
  itemList.innerHTML = taskText;
  list.appendChild(itemList)
}
function addComp () {
  let button = document.getElementById('btn-add');
  let task = document.getElementById('task-input');
  let taskText = task.Value;
  button.addEventListener('click', addTaskList)
}
addComp()

