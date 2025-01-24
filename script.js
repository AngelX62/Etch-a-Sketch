function randColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;

    return `rgb(${r}, ${g}, ${b})`;
}

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
        square.style.border = '1px solid black';
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = randColor();
        });
        gridContainer.appendChild(square);
    }
}

function makeSlider() {
    // Slider
    const slider = document.querySelector("#slider");
    const number = document.querySelector("#number");
    
    function updateGrid(size) {
        size = Math.max(1, Math.min(100, size));
        slider.value = size;
        gridInput.value = size;
        number.textContent = size;
        createGrid(size);
    }

    slider.addEventListener("input", () => {
        updateGrid(parseInt(slider.value, 10));
    });

    gridInput.addEventListener("keypress", function (e) {
        if (e.key == "Enter") updateGrid(parseInt(gridInput.value, 10));
    });

    gridInput.addEventListener("change", function () {
        updateGrid(parseInt(gridInput.value, 10));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider');
    const initialSize = parseInt(slider.value, 10);
    createGrid(initialSize);
    makeSlider();
})

