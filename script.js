const grid = document.getElementById('grid');

// Function for creating the grid
function createGrid(gridNum) {
    // For loop creating the number of cells
    for (x = 0; x < gridNum; x++) {
        let rows = document.createElement('div')
        grid.appendChild(rows).className = 'gridRow';
        for (c = 0; c < gridNum; c++) {
            let cells = document.createElement('div')
            rows.appendChild(cells).className = 'gridCell';
        }
    }

};

createGrid(16);
gridSquare = document.querySelectorAll('.gridCell').forEach(elem => elem.addEventListener("mouseover",
() => {
   console.log('IT WORKS') 
}));
