// let numSelected = null;
// let tileSelected = null;
// let error = 0;
// let seconds = 0;
// let minutes = 0;
// let timer = null;

// const timerBox = document.querySelector(".timer h3");
// const result = document.querySelector(".result");
// const resultText = document.querySelector(".result h1");
// const game = document.querySelector(".game");
// const newgame = document.querySelector(".new-game");
// let tiles = document.querySelectorAll(".tile");

// const boards = [
//     [
//         "--74916-5",
//         "2---6-3-9",
//         "-----7-1-",
//         "-586----4",
//         "--3----9-",
//         "--62--187",
//         "9-4-7---2",
//         "67-83----",
//         "81--45---"
//     ],
//     [
//         "3-542-6--",
//         "--9---7--",
//         "-5----2-9",
//         "-----1-3-",
//         "-46-2----",
//         "--1--84-7",
//         "--7---5--",
//         "-8---3---",
//         "1--9-74--"
//     ],
//     [
//         "-98-----3",
//         "4----29--",
//         "-3--8-4-5",
//         "-----6-9-",
//         "--7----4-",
//         "6---1-3--",
//         "---36----",
//         "25-----6-",
//         "---9-8-7-"
//     ],
//     [
//         "6--1-----",
//         "--73-2-1-",
//         "3-4------",
//         "1-2--8---",
//         "-7---4---",
//         "---9--5-3",
//         "------9-5",
//         "-5-3-61--",
//         "-----4--7"
//     ],
//     [
//         "-2--7----",
//         "-4-6-1---",
//         "--3-9--7-",
//         "3-1---9--",
//         "---8---5-",
//         "8---3-2--",
//         "9--7-3--2",
//         "--5--8---",
//         "---3---1-"
//     ],
//     [
//         "--4-5-1--",
//         "----1--6-",
//         "--1-3--7-",
//         "7----6-9-",
//         "--2-8----",
//         "----3----",
//         "1--8--5--",
//         "--6--7---",
//         "---2---9-"
//     ],
//     [
//         "---93-7--",
//         "--6--1-2-",
//         "1--3-7---",
//         "--9-5----",
//         "-7--6-4--",
//         "-3--9--7-",
//         "4---2--6-",
//         "--5---9-3",
//         "----6-5--"
//     ],
//     [
//         "-7-6---8-",
//         "--54---2-",
//         "---2--7--",
//         "--5-8-9--",
//         "--1---6--",
//         "8-2----5-",
//         "---7----3",
//         "--9-6--8-",
//         "4--2----1"
//     ],
//     [
//         "---9-4--6",
//         "-7--5---2",
//         "--5---7--",
//         "--3--7-1-",
//         "-6-2----4",
//         "--9-1--8-",
//         "2--8----7",
//         "--6---5--",
//         "---7--9-4"
//     ],
//     [
//         "----4---8",
//         "8-3-7----",
//         "--9-8---5",
//         "---9--1--",
//         "-5----2--",
//         "--1---9--",
//         "7----6--4",
//         "--8--5-7-",
//         "---2-4---"
//     ]
// ];

// const solutions = [
//     [
//         "387491625",
//         "241568379",
//         "569327418",
//         "758619234",
//         "123784596",
//         "496253187",
//         "934176852",
//         "675832941",
//         "812945763"
//     ],
//     [
//         "315427698",
//         "629518734",
//         "758964129",
//         "874651392",
//         "946823571",
//         "231749845",
//         "487296513",
//         "582173964",
//         "139985746"
//     ],
//     [
//         "198564273",
//         "476192985",
//         "532687419",
//         "723846591",
//         "957123684",
//         "641759382",
//         "819236457",
//         "254971368",
//         "376948217"
//     ],
//     [
//         "695142387",
//         "847362915",
//         "314597268",
//         "172583694",
//         "376491854",
//         "458973621",
//         "239856741",
//         "563214978",
//         "721946853"
//     ],
//     [
//         "321574896",
//         "947621583",
//         "653891742",
//         "381452967",
//         "576938214",
//         "892367125",
//         "945723681",
//         "265184739",
//         "738519456"
//     ],
//     [
//         "624759318",
//         "573214986",
//         "819637472",
//         "781456239",
//         "462893751",
//         "395128647",
//         "136875924",
//         "297641835",
//         "548327196"
//     ],
//     [
//         "265931784",
//         "386741295",
//         "179382576",
//         "649578123",
//         "725164389",
//         "831925467",
//         "412893657",
//         "537416892",
//         "918256734"
//     ],
//     [
//         "174632985",
//         "635478219",
//         "892195374",
//         "523897461",
//         "761342598",
//         "918253746",
//         "349576812",
//         "269814753",
//         "487925136"
//     ],
//     [
//         "514974826",
//         "376158492",
//         "429536781",
//         "643785219",
//         "752619483",
//         "981247635",
//         "237864157",
//         "865931247",
//         "198742965"
//     ],
//     [
//         "196847352",
//         "834572961",
//         "729168475",
//         "453926817",
//         "571348296",
//         "218435679",
//         "947613524",
//         "685279134",
//         "372951684"
//     ]
// ];

// window.onload = function () {
//     initializeGame();
// }

// newgame.addEventListener("click", () => {
//     initializeGame();
// });

// function initializeGame() {
//     game.classList.remove("hide");
//     result.classList.add("hide");
//     if (numSelected != null) {
//         numSelected.classList.remove("selected");
//     }

//     let randIndex = Math.floor(Math.random() * boards.length);
//     let board = boards[randIndex];
//     let solution = solutions[randIndex];

//     // Reset digits
//     const digitsContainer = document.querySelector(".digits");
//     digitsContainer.innerHTML = '';
//     for (let i = 1; i <= 9; i++) {
//         let num = document.createElement("div");
//         num.id = i;
//         num.innerText = i;
//         num.classList.add("number");
//         num.addEventListener("click", selectNumber);
//         digitsContainer.appendChild(num);
//     }

//     // Reset errors and timer
//     error = 0;
//     document.querySelector(".errors h2").innerText = `Errors-${error}`;
//     seconds = 0;
//     minutes = 0;
//     timerBox.innerText = `00:00`;
//     clearInterval(timer);
//     startTimer();

//     // Reset board
//     const boardContainer = document.querySelector(".board");
//     boardContainer.innerHTML = '';
//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let tile = document.createElement("div");
//             tile.id = `${r}-${c}`;
//             if (board[r][c] != '-') {
//                 tile.innerText = board[r][c];
//                 tile.classList.add("selected");
//             } else {
//                 tile.innerText = "";
//             }
//             if (r === 2 || r === 5) {
//                 tile.classList.add("horizontal-border");
//             }
//             if (c === 2 || c === 5) {
//                 tile.classList.add("vertical-border");
//             }
//             tile.addEventListener("click", function () {
//                 selectTile(tile, solution);
//             });
//             tile.classList.add("tile");
//             boardContainer.appendChild(tile);
//         }
//     }

//     // Update the tiles NodeList
//     tiles = document.querySelectorAll(".tile");
// }

// function selectTile(tile, solution) {
//     if (numSelected == null) return;
//     if (tile.innerText != "") return;
//     let tileId = tile.id.split('-');
//     let r = parseInt(tileId[0]);
//     let c = parseInt(tileId[1]);

//     if (solution[r][c] == numSelected.innerText) {
//         tile.innerText = numSelected.innerText;
//         tile.classList.add("selected");
//         checkCompletion();
//     } else {
//         error += 1;
//         document.querySelector(".errors h2").innerText = `Errors-${error}`;
//     }
// }

// function selectNumber() {
//     if (numSelected != null) {
//         numSelected.classList.remove("selected");
//     }
//     numSelected = this;
//     numSelected.classList.add("selected");
// }

// function startTimer() {
//     timer = setInterval(updateTime, 1000);
// }

// function updateTime() {
//     seconds += 1;
//     if (seconds === 60) {
//         minutes += 1;
//         seconds = 0;
//     }
//     let secondsStr = seconds < 10 ? `0${seconds}` : seconds;
//     let minutesStr = minutes < 10 ? `0${minutes}` : minutes;
//     timerBox.innerText = `${minutesStr}:${secondsStr}`;
// }

// function checkCompletion() {
//     for (let tile of tiles) {
//         if (tile.innerText === "") {
//             return; // Game is not yet complete
//         }
//     }
//     // All tiles are filled
//     stopTimer();
//     result.classList.remove("hide");
//     game.classList.add("hide");
//     resultText.innerText = `Congratulations! You completed the puzzle in ${timerBox.innerText} with ${error} errors.`;
// }

// function stopTimer() {
//     clearInterval(timer);
// }



// let numSelected = null;
// let tileSelected = null;
// let error = 0;
// let seconds = 0;
// let minutes = 0;
// let timer = null;
// let difficulty="";
// const timerBox = document.querySelector(".timer h3");
// const result = document.querySelector(".result");
// const resultText = document.querySelector(".result h1");
// const game = document.querySelector(".game");
// const newgame = document.querySelector(".new-game");
// let tiles = document.querySelectorAll(".tile");
// const levelbuttons=document.querySelectorAll(".level-buttons");
// const level=document.querySelector(".level")
// window.onload = function () {
//     selectLevel();
// }

// newgame.addEventListener("click", () => {
//     initializeGame();
// });


// function selectLevel()
// {
//     for(let i=0;i<3;i++)
//     {
//         levelbuttons[i].id=i;
//         levelbuttons[i].addEventListener("click",
//             ()=>{
//                 setLevel(levelbuttons[i]);
//             }
//         );
//     }
// }


// function setLevel(levelbutton)
// {
//     let id=levelbutton.id;
//     if(id==="0")
//     {
//         difficulty="easy";
//     }
//     else if(id==="1")
//     {
//         difficulty="medium";
//     }
//     else if(id==="2")
//     {
//         difficulty="hard";
//     }
//     level.classList.add("hide");
//     initializeGame();
// }

// function initializeGame() {
//     game.classList.remove("hide");
//     result.classList.add("hide");
//     level.classList.add("hide");
//     if (numSelected != null) {
//         numSelected.classList.remove("selected");
//     }

//     let { puzzle, solution } = generateSudoku(40);

//     // Reset digits
//     const digitsContainer = document.querySelector(".digits");
//     digitsContainer.innerHTML = '';
//     for (let i = 1; i <= 9; i++) {
//         let num = document.createElement("div");
//         num.id = i;
//         num.innerText = i;
//         num.classList.add("number");
//         num.addEventListener("click", selectNumber);
//         digitsContainer.appendChild(num);
//     }

//     // Reset errors and timer
//     error = 0;
//     document.querySelector(".errors h2").innerText = `Errors-${error}`;
//     seconds = 0;
//     minutes = 0;
//     timerBox.innerText = `00:00`;
//     clearInterval(timer);
//     startTimer();

//     // Reset board
//     const boardContainer = document.querySelector(".board");
//     boardContainer.innerHTML = '';
//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let tile = document.createElement("div");
//             tile.id = `${r}-${c}`;
//             if (puzzle[r][c] != 0) {
//                 tile.innerText = puzzle[r][c];
//                 tile.classList.add("selected");
//             } else {
//                 tile.innerText = "";
//             }
//             if (r === 2 || r === 5) {
//                 tile.classList.add("horizontal-border");
//             }
//             if (c === 2 || c === 5) {
//                 tile.classList.add("vertical-border");
//             }
//             tile.addEventListener("click", function () {
//                 selectTile(tile, solution);
//             });
//             tile.classList.add("tile");
//             boardContainer.appendChild(tile);
//         }
//     }

//     // Update the tiles NodeList
//     tiles = document.querySelectorAll(".tile");
// }

// function selectTile(tile, solution) {
//     if (numSelected == null) return;
//     if (tile.innerText != "") return;
//     let tileId = tile.id.split('-');
//     let r = parseInt(tileId[0]);
//     let c = parseInt(tileId[1]);

//     if (solution[r][c] == numSelected.innerText) {
//         tile.innerText = numSelected.innerText;
//         tile.classList.add("selected");
//         checkCompletion();
//     } else {
//         error += 1;
//         document.querySelector(".errors h2").innerText = `Errors-${error}`;
//     }
// }

// function selectNumber() {
//     if (numSelected != null) {
//         numSelected.classList.remove("selected");
//     }
//     numSelected = this;
//     numSelected.classList.add("selected");
// }

// function startTimer() {
//     timer = setInterval(updateTime, 1000);
// }

// function updateTime() {
//     seconds += 1;
//     if (seconds === 60) {
//         minutes += 1;
//         seconds = 0;
//     }
//     let secondsStr = seconds < 10 ? `0${seconds}` : seconds;
//     let minutesStr = minutes < 10 ? `0${minutes}` : minutes;
//     timerBox.innerText = `${minutesStr}:${secondsStr}`;
// }

// function checkCompletion() {
//     for (let tile of tiles) {
//         if (tile.innerText === "") {
//             return; // Game is not yet complete
//         }
//     }
//     // All tiles are filled
//     stopTimer();
//     result.classList.remove("hide");
//     game.classList.add("hide");
//     resultText.innerText = `Congratulations! You completed the puzzle in ${timerBox.innerText} with ${error} errors.`;
// }

// function stopTimer() {
//     clearInterval(timer);
// }

// // Sudoku generation logic
// function generateSudoku(emptySpaces) {
//     let solution = generateCompletedBoard();
//     let puzzle = deepCopyBoard(solution);

//     // Remove numbers to create the puzzle
//     for (let i = 0; i < emptySpaces; i++) {
//         let row, col;
//         do {
//             row = Math.floor(Math.random() * 9);
//             col = Math.floor(Math.random() * 9);
//         } while (puzzle[row][col] === 0); // Ensure we are removing only filled cells
//         puzzle[row][col] = 0; // Remove the number
//     }

//     return { puzzle, solution };
// }

// // Helper to create a deep copy of the board
// function deepCopyBoard(board) {
//     return board.map(row => row.slice());
// }

// // Simple backtracking algorithm to generate a complete Sudoku board
// function generateCompletedBoard() {
//     let board = Array.from({ length: 9 }, () => Array(9).fill(0));
//     solveBoard(board);
//     return board;
// }

// // Backtracking Sudoku solver (used for generation)
// function solveBoard(board) {
//     let emptyCell = findEmptyCell(board);
//     if (!emptyCell) {
//         return true; // Board is complete
//     }

//     let [row, col] = emptyCell;
//     for (let num = 1; num <= 9; num++) {
//         if (isValidPlacement(board, num, row, col)) {
//             board[row][col] = num;

//             if (solveBoard(board)) {
//                 return true;
//             }

//             board[row][col] = 0; // Backtrack
//         }
//     }
//     return false;
// }

// // Find an empty cell (0) in the board
// function findEmptyCell(board) {
//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             if (board[r][c] === 0) {
//                 return [r, c];
//             }
//         }
//     }
//     return null;
// }

// // Check if a number can be placed in a given cell
// function isValidPlacement(board, num, row, col) {
//     // Check row
//     for (let c = 0; c < 9; c++) {
//         if (board[row][c] === num) {
//             return false;
//         }
//     }

//     // Check column
//     for (let r = 0; r < 9; r++) {
//         if (board[r][col] === num) {
//             return false;
//         }
//     }

//     // Check 3x3 box
//     let boxRow = Math.floor(row / 3) * 3;
//     let boxCol = Math.floor(col / 3) * 3;
//     for (let r = boxRow; r < boxRow + 3; r++) {
//         for (let c = boxCol; c < boxCol + 3; c++) {
//             if (board[r][c] === num) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }



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
