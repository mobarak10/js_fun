const container = document.getElementById('container')
const colors = ['#FF5733', '#FFBD33', '#DBFF33', '#33FF57', '#5733FF', '#33DBFF']
const SQUARE_NM = 1000;

for(let i = 0; i < SQUARE_NM; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColorToEl(square)
    })

    square.addEventListener('mouseout', () => {
        removeColorFromEl(square)
    })

    container.appendChild(square);
}

function setColorToEl(event) {
    const color = getRandomColor();

    event.style.background = color;
    event.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColorFromEl(event) {
    event.style.background = '#1d1d1d';
    event.style.boxShadow = `0 0 2px #000000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}