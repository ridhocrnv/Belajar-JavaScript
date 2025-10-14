const addButton = document.getElementById('btn-add');
const deleteButton = document.getElementById('btn-less');
const resetButton = document.getElementById('btn-reset');
const screen = document.getElementById('screenfix');

let counter = 0;

screen.innerHTML = counter;

function add() {
    counter = counter + 1;
    screen.innerHTML = counter;
    console.log(counter);
}

function less() {
    counter = counter - 1;
    screen.innerHTML = counter;
    console.log(counter)
}

function reset() {
    counter = 0;
    screen.innerHTML = counter;
}

addButton.addEventListener('click', add);
deleteButton.addEventListener('click', less);
resetButton.addEventListener('click', reset)
