function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    table.innerHTML = '';

    // loop over each row
    for (let x = 0; x < height; x++) {
        let row = table.insertRow(x);
        // Loop to insert the cells
        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            // Add click event to the cells
            cell.addEventListener('click', function (event) {
                // When the cell is clicked, the color of the cell changed to the selected color
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
}

//git the Height and the Width from use to makrGrid()
function tablesub() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

//on submit from #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    tablesub();
};

//Build a default grid 10x10.
makeGrid(10, 10);