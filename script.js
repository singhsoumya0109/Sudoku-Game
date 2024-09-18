var numSelected = null;
var tileSelected = null;
let error = 0;

var boards = [
    [
        "--74916-5",
        "2---6-3-9",
        "-----7-1-",
        "-586----4",
        "--3----9-",
        "--62--187",
        "9-4-7---2",
        "67-83----",
        "81--45---"
    ],
    [
        "3-542-6--",
        "--9---7--",
        "-5----2-9",
        "-----1-3-",
        "-46-2----",
        "--1--84-7",
        "--7---5--",
        "-8---3---",
        "1--9-74--"
    ],
    [
        "-98-----3",
        "4----29--",
        "-3--8-4-5",
        "-----6-9-",
        "--7----4-",
        "6---1-3--",
        "---36----",
        "25-----6-",
        "---9-8-7-"
    ],
    [
        "6--1-----",
        "--73-2-1-",
        "3-4------",
        "1-2--8---",
        "-7---4---",
        "---9--5-3",
        "------9-5",
        "-5-3-61--",
        "-----4--7"
    ],
    [
        "-2--7----",
        "-4-6-1---",
        "--3-9--7-",
        "3-1---9--",
        "---8---5-",
        "8---3-2--",
        "9--7-3--2",
        "--5--8---",
        "---3---1-"
    ],
    [
        "--4-5-1--",
        "----1--6-",
        "--1-3--7-",
        "7----6-9-",
        "--2-8----",
        "----3----",
        "1--8--5--",
        "--6--7---",
        "---2---9-"
    ],
    [
        "---93-7--",
        "--6--1-2-",
        "1--3-7---",
        "--9-5----",
        "-7--6-4--",
        "-3--9--7-",
        "4---2--6-",
        "--5---9-3",
        "----6-5--"
    ],
    [
        "-7-6---8-",
        "--54---2-",
        "---2--7--",
        "--5-8-9--",
        "--1---6--",
        "8-2----5-",
        "---7----3",
        "--9-6--8-",
        "4--2----1"
    ],
    [
        "---9-4--6",
        "-7--5---2",
        "--5---7--",
        "--3--7-1-",
        "-6-2----4",
        "--9-1--8-",
        "2--8----7",
        "--6---5--",
        "---7--9-4"
    ],
    [
        "----4---8",
        "8-3-7----",
        "--9-8---5",
        "---9--1--",
        "-5----2--",
        "--1---9--",
        "7----6--4",
        "--8--5-7-",
        "---2-4---"
    ]
];

var solutions = [
    [
        "387491625",
        "241568379",
        "569327418",
        "758619234",
        "123784596",
        "496253187",
        "934176852",
        "675832941",
        "812945763"
    ],
    [
        "315427698",
        "629518734",
        "758964129",
        "874651392",
        "946823571",
        "231749845",
        "487296513",
        "582173964",
        "139985746"
    ],
    [
        "198564273",
        "476192985",
        "532687419",
        "723846591",
        "957123684",
        "641759382",
        "819236457",
        "254971368",
        "376948217"
    ],
    [
        "695142387",
        "847362915",
        "314597268",
        "172583694",
        "376491854",
        "458973621",
        "239856741",
        "563214978",
        "721946853"
    ],
    [
        "321574896",
        "947621583",
        "653891742",
        "381452967",
        "576938214",
        "892367125",
        "945723681",
        "265184739",
        "738519456"
    ],
    [
        "624759318",
        "573214986",
        "819637472",
        "781456239",
        "462893751",
        "395128647",
        "136875924",
        "297641835",
        "548327196"
    ],
    [
        "265931784",
        "386741295",
        "179382576",
        "649578123",
        "725164389",
        "831925467",
        "412893657",
        "537416892",
        "918256734"
    ],
    [
        "174632985",
        "635478219",
        "892195374",
        "523897461",
        "761342598",
        "918253746",
        "349576812",
        "269814753",
        "487925136"
    ],
    [
        "514974826",
        "376158492",
        "429536781",
        "643785219",
        "752619483",
        "981247635",
        "237864157",
        "865931247",
        "198742965"
    ],
    [
        "196847352",
        "834572961",
        "729168475",
        "453926817",
        "571348296",
        "218435679",
        "947613524",
        "685279134",
        "372951684"
    ]
];

window.onload = function () {
    start();
}

function start() {
    // Randomly select a board and its solution
    let randIndex = Math.floor(Math.random() * boards.length);
    let board = boards[randIndex];
    let solution = solutions[randIndex];

    // Populate digits for user selection
    for (let i = 0; i < 9; i++) {
        let num = document.createElement("div");
        num.id = i;
        num.innerText = i + 1;
        num.classList.add("number");
        num.addEventListener("click", selectNumber);
        document.querySelector(".digits").appendChild(num);
    }

    // Create board with tiles
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != '-') {
                tile.innerText = board[r][c];
                tile.classList.add("selected");
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
            document.querySelector(".board").appendChild(tile);
        }
    }
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
    } else {
        error += 1;
        document.querySelector(".errors h2").innerText = error;
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("selected");
    }
    numSelected = this;
    numSelected.classList.add("selected");
}