const grid = document.getElementsByClassName('grid')

function createGrid(numCells) {
    for (let x = 0; x < numCells; x++) {
        let cells = document.createElement('div');
        grid.appendChild(cells)
    }
}
