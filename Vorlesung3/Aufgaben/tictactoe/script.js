let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
    if (board[index] === '' && !gameOver) {
        document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;
        board[index] = currentPlayer;

        if (checkWin()) {
            console.log(`Current player ${currentPlayer} has won!`)
            gameOver = true;
            setT
            alert(`${currentPlayer} has won!`)
        }
        if (gameOver || !board.includes('')) {
            gameOver = true;
            console.log('ende gelände')
        }

        currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    }
}

function checkWin() {
    //return if the tic tac toe game has been won
    if ((board[0] === board[1] && board[1] === board[2] && board[0] !== '') ||
        (board[3] === board[4] && board[4] === board[5] && board[3] !== '') ||
        (board[6] === board[7] && board[7] === board[8] && board[6] !== '') ||
        (board[0] === board[3] && board[3] === board[6] && board[0] !== '') ||
        (board[1] === board[4] && board[4] === board[7] && board[1] !== '') ||
        (board[2] === board[5] && board[5] === board[8] && board[2] !== '') ||
        (board[0] === board[4] && board[4] === board[8] && board[0] !== '') ||
        (board[2] === board[4] && board[4] === board[6] && board[2] !== '')
    ) return true;
    return false;
}

function resetGame() {
    // to be implemente
    for (let i = 0; i < 9; i++) {
        board[i] = ''
        document.getElementsByClassName("cell")[i].innerHTML = ''
    }
    gameOver = false;
    currentPlayer = 'X'
}
