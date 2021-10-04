
let clearButton = document.querySelector('#clear');
let changeSizeButton = document.querySelector('#change-size');

function highlightCell() {
    this.classList.add('highlighted-cell')
}

function clear() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.classList.remove('highlighted-cell');
    })
}

function createGrid(columns = 16, rows = 16) {

    let gridContainer = document.querySelector("#grid-container");

    gridContainer.style.cssText = 'grid-template-rows: none; grid-template-columns: none;';

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < columns; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', highlightCell)

            gridContainer.appendChild(cell);
        }
    }

    gridContainer.style.cssText = `grid-template-rows: repeat(${rows}, 1fr); grid-template-columns: repeat(${columns}, 1fr)`;
}


clearButton.addEventListener('click', clear);

createGrid();