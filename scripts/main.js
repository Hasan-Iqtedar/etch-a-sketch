
function createGrid(columns = 16, rows = 16) {

    let gridContainer = document.querySelector("#gridContainer");

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < columns; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            gridContainer.appendChild(cell);
        }
    }

    gridContainer.style.cssText = `grid-template-rows: repeat(${rows}, 1fr); grid-template-columns: repeat(${columns}, 1fr)`;
  
}

createGrid();