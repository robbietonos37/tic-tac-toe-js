const gameBoardSquares = document.querySelectorAll('.square');
const gameBoardArray = Array.from(gameBoardSquares);

const gameBoard = (function () {
    const gameGrid = [];
    let gameTurn = 1;
    gameBoardSquares.forEach((square) => {
        square = gameSquare();
        gameGrid.push(square);
    })
    const turnTaken = () => gameTurn++;
    const getNumTurns = () => gameTurn;

    const checkForWinner = () => {
        if (gameBoardSquares[0].getTextContent() === 'X' && gameBoardSquares[1].getTextContent() === 'X' && gameBoardSquares[2].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
        } else if(gameBoardSquares[3].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[5].getTextContent() === 'X'){
            console.log('Player 1 is winner!');
        } else if(gameBoardSquares[6].getTextContent() === 'X' && gameBoardSquares[7].getTextContent() === 'X' && gameBoardSquares[8].getTextContent() === 'X'){
        console.log('Player 1 is winner!');
        }
    }

    return { gameGrid, turnTaken, getNumTurns, checkForWinner }
})()

gameBoardArray.forEach((square) => {
    Object.assign(square, gameSquare());
    gameBoard.gameGrid.push(square);
    square.addEventListener('click', () => {

        if (!square.getIsMarked()) {
            square.markSquare();
            square.textContent = square.getTextContent();
            gameBoard.checkForWinner();
        }
    })
})

const player1 = (function () {
    const takeTurn = () => gameBoard.turnTaken();
    return { takeTurn };
})()

const player2 = (function () {
    const takeTurn = () => gameBoard.turnTaken();
    return { takeTurn };
})()

function gameSquare() {
    let isMarked = false;
    let squareTextContent = '';
    const getIsMarked = () => isMarked;
    const markSquare = () => {
        if (!isMarked) {
            console.log('wtf');
            console.log(player1.isMyTurn);
            console.log(player2.isMyTurn);
            if (gameBoard.getNumTurns() % 2 === 1) {
                squareTextContent = 'X';
                isMarked = true;
                player1.takeTurn();
            } else {
                squareTextContent = 'O';
                isMarked = true;
                player2.takeTurn();
            }
            console.log(gameBoard.getNumTurns());
        }
    };
    const getTextContent = () => squareTextContent;
    return { isMarked, getIsMarked, markSquare, getTextContent };
}


