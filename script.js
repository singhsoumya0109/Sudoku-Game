let numSelected = null;
let tileSelected = null;
let error = 0;
let seconds = 0;
let minutes = 0;
let timer = null;
let difficulty="";
const timerBox = document.querySelector(".timer h3");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result h1");
const game = document.querySelector(".game");
const newgame = document.querySelector(".new-game");
let tiles = document.querySelectorAll(".tile");
const levelbuttons=document.querySelectorAll(".level-buttons");
const level=document.querySelector(".level")
window.onload = function () {
    selectLevel();
}

newgame.addEventListener("click", () => {
    initializeGame();
});


function selectLevel()
{
    for(let i=0;i<3;i++)
    {
        levelbuttons[i].id=i;
        levelbuttons[i].addEventListener("click",
            ()=>{ 
                setLevel(levelbuttons[i]);
            }
        );
    }
}


function setLevel(levelbutton)
{
    let id=levelbutton.id;
    if(id==="0")
    {
        difficulty="easy";
    }
    else if(id==="1")
    {
        difficulty="medium";
    }
    else if(id==="2")
    {
        difficulty="hard";
    }
    level.classList.add("hide");
    initializeGame();
}

function initializeGame() {
    game.classList.remove("hide");
    result.classList.add("hide");
    level.classList.add("hide");
    if (numSelected != null) {
        numSelected.classList.remove("selected");
    }

    let { puzzle, solution } = generateSudoku(difficulty);

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

// Algorithm for generating Sudoku puzzles and solutions
function isValid(grid, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === num || grid[i][col] === num) {
            return false;
        }
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[boxRow + i][boxCol + j] === num) {
                return false;
            }
        }
    }
    return true;
}

function createSolvedGrid() {
    const grid = Array.from({ length: 9 }, () => Array(9).fill(0));

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    const nums = shuffle([...Array(9).keys()].map(x => x + 1)); // Randomize numbers 1-9
                    for (let num of nums) {
                        if (isValid(grid, row, col, num)) {
                            grid[row][col] = num;
                            if (solve()) return true;
                            grid[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    solve();
    return grid;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function removeCells(grid, numClues) {
    const puzzle = grid.map(row => [...row]);
    let cellsToRemove = 81 - numClues;

    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (puzzle[row][col] !== 0) {
            puzzle[row][col] = 0;
            cellsToRemove--;
        }
    }

    return puzzle;
}

function hasUniqueSolution(grid) {
    let solutionCount = 0;

    function solve(grid) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(grid, row, col, num)) {
                            grid[row][col] = num;
                            if (solve(grid)) {
                                solutionCount++;
                                if (solutionCount > 1) return false; // More than 1 solution
                            }
                            grid[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    solve(grid);
    return solutionCount === 1;
}

function generateSudoku(level) {
    const solvedGrid = createSolvedGrid();

    let numClues;
    if (level === 'easy') {
        numClues = Math.floor(Math.random() * (40 - 35 + 1)) + 35;  // Random number between 35 and 40
    } else if (level === 'medium') {
        numClues = Math.floor(Math.random() * (34 - 30 + 1)) + 30;  // Random number between 30 and 34
    } else if (level === 'hard') {
        numClues = Math.floor(Math.random() * (29 - 24 + 1)) + 24;  // Random number between 24 and 29
    }

    let puzzleGrid = removeCells(solvedGrid, numClues);

    while (!hasUniqueSolution(puzzleGrid)) {
        puzzleGrid = removeCells(solvedGrid, numClues);
    }

    return {
        puzzle: puzzleGrid,
        solution: solvedGrid
    };
}
