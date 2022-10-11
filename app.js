const root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);

let size = rootStyles.getPropertyValue('--size');

const grid = document.querySelector('#grid');

let squares = [];

function createGrid() {
  for (let i = 0; i < size ** 2; i++) {
    squares[i] = document.createElement('div');
    squares[i].classList.add('square');
    squares[i].id = i;
    grid.appendChild(squares[i]);
  }

  for (let square of squares) {
    square.addEventListener('mouseenter', changeColor);
  }
}

function changeColor(e) {
  e.target.classList.add('colored');
}

function setSize() {
  do {
    size = parseInt(prompt("Size must be between 2 and 100"));
  }
  while (size < 2 || size > 100 || isNaN(size));

  root.style.setProperty('--size', size);
}

function createNewGrid() {
  for (let i = 0; i < size ** 2; i++) {
    grid.removeChild(grid.lastChild);
  }

  setSize();

  createGrid();
}

function erase() {
  for (let square of squares) {
    if (square.classList.contains('colored')) {
      square.classList.remove('colored');
    }
  }
}

const sizeButton = document.getElementById('size-btn');
sizeButton.addEventListener('click', createNewGrid);

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', erase);

createGrid();