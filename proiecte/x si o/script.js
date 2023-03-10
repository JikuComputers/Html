let board = 
[
    ['','',''],
    ['','',''],
    ['','','']
]

let player = 'X'
let gameOver = false


function play(x,y){
    if(board[x][y] !='' || gameOver)
    return
    board[x][y] = player
    k=x+','+y
    box = document.getElementById(k)
    box.textContent = player 
    
    if(checkD() || checkH() || checkV())
    {
        document.getElementById('text').textContent = player+ ' Won'
        document.getElementById('text').classList.add(player)
        gameOver = true
        document.getElementById('text').style.visibility='visible'  
        return
    }

    if(player == 'X')
        player = 'O'
    else
        player = 'X'
}

function checkV(){
    for(let i=0;i<3;i++)
    {
        if(board[0][i]!='' && board[1][i]==board[0][i] && board[2][i] == board[0][i])
        return true
    }
    return false
}

function checkH(){
    for(let i=0;i<3;i++)
    {
        if(board[i][0]!='' && board[i][1] == board[i][0] && board[i][2] == board[i][0])
        return true;
    }
    return false;
}

function checkD(){
    if(board[0][0]!='' && board[0][0]==board[1][1] && board[0][0]==board[2][2])
    return true
    if(board[2][0]!='' && board[2][0]==board[1][1] && board[2][0]==board[0][2])
    return true

    return false
}
function restart(){
    board = 
    [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    gameOver = false
    let boxes = document.getElementsByClassName('box')
    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].textContent = ''
    }
    document.getElementById('text').style.visibility = 'hidden'
    player = 'X'
}