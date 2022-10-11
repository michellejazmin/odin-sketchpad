const grid = document.querySelector('#grid');
grid.textContent = '';

const squares = [];

for (let i = 0; i < 256; i ++) {
  squares[i] = document.createElement('div');
  squares[i].classList.add('square');
  squares[i].id = i;
  grid.appendChild(squares[i]);
}

function changeColor(e) {
  e.target.classList.toggle('colored');
}

for (let square of squares) {
  square.addEventListener('click', changeColor);
}

function erase() {
  for (let square of squares) {
    if (square.classList.contains('colored')) square.classList.remove('colored');
  }
}

const reset = document.getElementById('reset');
reset.addEventListener('click', erase);