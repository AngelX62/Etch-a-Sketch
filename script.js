// Create divs of number of grid squares based on user input
function createGrid(size) {
    const gridContainer = document.querySelector('#containerTwo');

    // Clear previous squares
    gridContainer.textContent = '';

    const containerSize = 400;
    const squareSize = containerSize / size;

    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';

        gridContainer.appendChild(square);
    }
}

// Slider
const slider = document.querySelector("#slider");
const number = document.querySelector("#number");
slider.oninput = function() {
    number.textContent = slider.value;
}

