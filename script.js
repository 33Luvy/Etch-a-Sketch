const grid = document.getElementsByClassName('grid')
let rows = document.getElementsByClassName('gridRow')
let cells = document.getElementsByClassName('gridCell')

function createRows(numRows) {
    for (let x = 0; x < numRows; x++) {
        let row = document.createElement('div');
        grid.appendChild(row).className = 'gridRow';
    }
}

