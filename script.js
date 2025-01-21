// Create divs of number of grid squares based on user input
function createGrid(size) {
    const gridContainer = document.querySelector('#containerTwo');

    // Clear previous squares
    gridContainer.textContent = '';

    const containerSize = 400;
    const squareSize = containerSize / size;

     
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.style.border = '2px solid black';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(square);
    }
}
function makeSlider() {
    // Slider
    const slider = document.querySelector("#slider");
    const number = document.querySelector("#number");
    slider.oninput = function() {
        number.textContent = slider.value;
    }

    // Update the grid and slider value dynamically
    slider.addEventListener("input", () => {
        const gridSize = parseInt(slider.value, 10);
        number.textContent = gridSize; // Update the number display
        createGrid(gridSize); // Generate the grid
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider');
    const initialSize = parseInt(slider.value, 10);
    createGrid(initialSize);
    makeSlider();
})

