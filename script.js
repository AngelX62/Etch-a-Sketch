function randColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;

    return `rgb(${r}, ${g}, ${b})`;
}

let isDrawing = false;

// Create divs of number of grid squares based on user input
function createGrid(size) {
    const gridContainer = document.querySelector('#containerTwo');

    // Clear previous squares
    gridContainer.textContent = '';

    const containerSize = 500;
    const squareSize = containerSize / size;
     
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.style.border = '1px solid black';
        square.style.background = 'white';
        square.addEventListener('mouseover', () => {
            if(isDrawing) {
                square.style.backgroundColor = randColor();
            }
        }); 
        gridContainer.appendChild(square);
    }  

    gridContainer.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    gridContainer.addEventListener('mousedown', () => {
        isDrawing = true;
    })

    gridContainer.addEventListener('mouseup', () => {
        isDrawing = false;
    });
}

function makeSlider() {
    // Slider
    const slider = document.querySelector("#slider");
    const number = document.querySelector("#number");
    const gridInput = document.querySelector('#gridInput');
    // Inner function to update the grid size based on the slider
    function updateGrid(size) {
        size = Math.max(1, Math.min(100, size));
        slider.value = size;
        gridInput.value = size;
        number.textContent = size;
        createGrid(size);
    }
    // Action when sliding
    slider.addEventListener("input", () => {
        updateGrid(parseInt(slider.value, 10));
    });
    // Action when pressing enter to designated slider value
    gridInput.addEventListener("keypress", function (e) {
        if (e.key == "Enter") updateGrid(parseInt(gridInput.value, 10));
    });
    // To change the grid amount when clicking the arrow to change
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

