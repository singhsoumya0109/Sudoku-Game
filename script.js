var numSelected = null;
var tileSelected = null;
let error=0;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]


var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]


window.onload=function(){
    start();
}
function start()
{
    for(let i=0;i<9;i++)
    {
        let num=document.createElement("div");
        num.id=i;
        num.innerText=i+1;
        num.classList.add("number");
        num.addEventListener("click",selectNumber);
        document.querySelector(".digits").appendChild(num);
    }
    for(let r=0;r<9;r++)
    {
        for(let c=0;c<9;c++)
        {
            let tile=document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c]!='-')
            {
                tile.innerText=board[r][c];
                tile.classList.add("selected");
            }
            if(r===2 || r===5)
            {
                tile.classList.add("horizontal-border");
            }
            if(c===2 || c===5)
            {
                tile.classList.add("vectical-border");
            }
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.querySelector(".board").appendChild(tile);
        }
    }
}

function selectTile()
{
    if(numSelected==null)
        return;
    if(this.innerText!="")
        return;
    let tileId = this.id.split('-'); 
    let r = parseInt(tileId[0]);
    let c = parseInt(tileId[1]);
    if(solution[r][c]==numSelected.innerText)
    {
        this.innerText=numSelected.innerText;
        this.classList.add("selected");
    }
    else
    {
        error+=1;
        document.querySelector(".errors h2").innerText=error;
    }
}


function selectNumber()
{
    if(numSelected!=null)
    {
        numSelected.classList.remove("selected");
    }
    numSelected=this;
    numSelected.classList.add("selected");
}