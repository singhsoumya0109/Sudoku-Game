let numSelected = null;
let tileSelected = null;
let error = 0;
let seconds = 0;
let minutes = 0;
let timer = null;

const timerBox = document.querySelector(".timer h3");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result h1");
const game = document.querySelector(".game");
const newgame = document.querySelector(".new-game");
let tiles = document.querySelectorAll(".tile");

window.onload = function () {
    initializeGame();
}

newgame.addEventListener("click", () => {
    initializeGame();
});

function initializeGame() {
    game.classList.remove("hide");
    result.classList.add("hide");
    if (numSelected != null) {
        numSelected.classList.remove("selected");
    }

    let { puzzle, solution } = generateSudoku(40); // Generate a new puzzle with 50 empty spots

    // Reset digits
    const digitsContainer = document.querySelector(".digits");
    digitsContainer.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        let num = document.createElement("div");
        num.id = i;
        num.innerText = i;
        num.classList.add("number");
        num.addEventListener("click", selectNumber);
        digitsContainer.appendChild(num);
    }

    // Reset errors and timer
    error = 0;
    document.querySelector(".errors h2").innerText = `Errors-${error}`;
    seconds = 0;
    minutes = 0;
    timerBox.innerText = `00:00`;
    clearInterval(timer);
    startTimer();

    // Reset board
    const boardContainer = document.querySelector(".board");
    boardContainer.innerHTML = '';
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = `${r}-${c}`;
            if (puzzle[r][c] != 0) {
                tile.innerText = puzzle[r][c];
                tile.classList.add("selected");
            } else {
                tile.innerText = "";
            }
            if (r === 2 || r === 5) {
                tile.classList.add("horizontal-border");
            }
            if (c === 2 || c === 5) {
                tile.classList.add("vertical-border");
            }
            tile.addEventListener("click", function () {
                selectTile(tile, solution);
            });
            tile.classList.add("tile");
            boardContainer.appendChild(tile);
        }
    }

    // Update the tiles NodeList
    tiles = document.querySelectorAll(".tile");
}

function selectTile(tile, solution) {
    if (numSelected == null) return;
    if (tile.innerText != "") return;
    let tileId = tile.id.split('-');
    let r = parseInt(tileId[0]);
    let c = parseInt(tileId[1]);

    if (solution[r][c] == numSelected.innerText) {
        tile.innerText = numSelected.innerText;
        tile.classList.add("selected");
        checkCompletion();
    } else {
        error += 1;
        document.querySelector(".errors h2").innerText = `Errors-${error}`;
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("selected");
    }
    numSelected = this;
    numSelected.classList.add("selected");
}

function startTimer() {
    timer = setInterval(updateTime, 1000);
}

function updateTime() {
    seconds += 1;
    if (seconds === 60) {
        minutes += 1;
        seconds = 0;
    }
    let secondsStr = seconds < 10 ? `0${seconds}` : seconds;
    let minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    timerBox.innerText = `${minutesStr}:${secondsStr}`;
}

function checkCompletion() {
    for (let tile of tiles) {
        if (tile.innerText === "") {
            return; // Game is not yet complete
        }
    }
    // All tiles are filled
    stopTimer();
    result.classList.remove("hide");
    game.classList.add("hide");
    resultText.innerText = `Congratulations! You completed the puzzle in ${timerBox.innerText} with ${error} errors.`;
}

function stopTimer() {
    clearInterval(timer);
}

// Sudoku generation logic
function generateSudoku(emptySpaces) {
    let solution = generateCompletedBoard();
    let puzzle = deepCopyBoard(solution);

    // Remove numbers to create the puzzle
    for (let i = 0; i < emptySpaces; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * 9);
            col = Math.floor(Math.random() * 9);
        } while (puzzle[row][col] === 0); // Ensure we are removing only filled cells
        puzzle[row][col] = 0; // Remove the number
    }

    return { puzzle, solution };
}

// Helper to create a deep copy of the board
function deepCopyBoard(board) {
    return board.map(row => row.slice());
}

// Simple backtracking algorithm to generate a complete Sudoku board
function generateCompletedBoard() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    solveBoard(board);
    return board;
}

// Backtracking Sudoku solver (used for generation)
function solveBoard(board) {
    let emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true; // Board is complete
    }

    let [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) {
        if (isValidPlacement(board, num, row, col)) {
            board[row][col] = num;

            if (solveBoard(board)) {
                return true;
            }

            board[row][col] = 0; // Backtrack
        }
    }
    return false;
}

// Find an empty cell (0) in the board
function findEmptyCell(board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 0) {
                return [r, c];
            }
        }
    }
    return null;
}

// Check if a number can be placed in a given cell
function isValidPlacement(board, num, row, col) {
    // Check row
    for (let c = 0; c < 9; c++) {
        if (board[row][c] === num) {
            return false;
        }
    }

    // Check column
    for (let r = 0; r < 9; r++) {
        if (board[r][col] === num) {
            return false;
        }
    }

    // Check 3x3 box
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            if (board[r][c] === num) {
                return false;
            }
        }
    }

    return true;
}
