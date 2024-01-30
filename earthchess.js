// Creates a center tag to center all the elements
let parentDiv = document.querySelector("#board");

let alphas = "abcdefghi".split("");
let nums = "987654321".split("");

// Creates a table element
let ChessTable = document.createElement("div");

for (let i = 0; i < 9; i++) {
// Create a row
let divRow = document.createElement("div");
divRow.setAttribute("class", "div-row");
for (let j = 0; j < 9; j++) {
// Creates a cell
let divData = document.createElement("div");
let boxId = alphas[j] + nums[i];

// If the sum of cell coordinates is even
// then color the cell white
if ((i + j) % 2 == 0) {
// Creates a class attribute for all white cells
divData.setAttribute("class", "white");
divData.setAttribute("id", boxId);
divRow.appendChild(divData);
}

// If the sum of cell coordinates is odd then
// color the cell black
else {
// Creates a class attribute for all black cells
divData.setAttribute("class", "white");
divData.setAttribute("id", boxId);
// Appends the cell to its row
divRow.appendChild(divData);
}
}

// Appends the row
parentDiv.appendChild(divRow);
}

// Modifies table attribute properties
parentDiv.setAttribute("cellspacing", "0");
document.body.appendChild(parentDiv);



document.getElementById("a1").innerHTML = "<div style='font-size:25px' class='blueheart'>🌍</div>";
document.getElementById("a2").innerHTML = "<div style='font-size:25px' class='bluecircle'>⭐</div>";
document.getElementById("b1").innerHTML = "<div style='font-size:25px' class='bluecircle2'>⭐</div>";
document.getElementById("b2").innerHTML = "<div style='font-size:25px' class='bluediamond'>🌑</div>";



document.getElementById("i9").innerHTML = "<div style='font-size:25px' class='redheart'>🌸</div>";
document.getElementById("h9").innerHTML = "<div style='font-size:25px' class='redcircle'>🌰</div>";
document.getElementById("i8").innerHTML = "<div style='font-size:25px' class='redcircle2'>🌰</div>";
document.getElementById("h8").innerHTML = "<div style='font-size:25px' class='rediamond'>🌱</div>";




let selectedPiece = null;
let moveHistory = []; // Array to store the history of moves
let eatHistory = []

//  click event listeners is added to all cells 
const cells = document.querySelectorAll('.white');
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const clickedCell = event.currentTarget;
    const clickedId = clickedCell.id;

    if (clickedId ==="e5"){alert("Game Complete!")}


    if (selectedPiece === null) {
        const pieceContent = clickedCell.innerHTML;
        if (pieceContent !== '') {
            selectedPiece = {
                id: clickedId,
                content: pieceContent
            };
            clickedCell.style.backgroundColor = 'blue';
        }
    } else {
        // Moves the selected piece to the clicked cell
        document.getElementById(selectedPiece.id).innerHTML = '';
        if (clickedCell.innerHTML !== ""){

            eatHistory.push(clickedCell.textContent)
        }
        clickedCell.innerHTML=""
        clickedCell.innerHTML = selectedPiece.content;

        // Save the move in the history
        moveHistory.push({
            from: selectedPiece.id,
            to: clickedId,
            piece: selectedPiece.content
        });

        // Reset the selected piece and cell highlight
        selectedPiece = null;
        cells.forEach(cell => {
            cell.style.backgroundColor = '';
        });

        // Display the move history (you can customize this part)
        displayMoveHistory();
        displayEatHistory()
    }
}

function displayMoveHistory() {
    // Displays move history (only recent one)
    console.clear();
    console.log("Move History:");
    moveHistory.forEach((move, index) => {

        document.getElementById("history").innerHTML = `<div style="border:solid;border-color:white">Turn: ${index + 1}<br> ${move.piece} Previous: ${move.from} <br> Current: ${move.to}</div>`;


        
    });

}


function displayEatHistory(){
    
    eatHistory.forEach(piece => {
        const newElement = document.createElement('div');
       
        newElement.textContent = piece;
    
        document.getElementById("eatHistory").appendChild(newElement);
        eatHistory=[]
    });

}
