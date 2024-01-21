const gameBoardSquares = document.querySelectorAll('.square');
const gameBoardArray = Array.from(gameBoardSquares);
const player1Name = document.querySelector('#name-1');
const player2Name = document.querySelector('#name-2');
const player1Form = document.querySelector('#player1');
const player2Form = document.querySelector('#player2');

const gameBoard = (function () {
    gameGrid = [];
    let gameTurn = 1;
    gameBoardSquares.forEach((square) => {
        square = gameSquare();
        gameGrid.push(square);
    })
    const turnTaken = () => gameTurn++;
    const getNumTurns = () => gameTurn;

    const resetBoard = () => {
        gameBoardSquares.forEach((square) => {
            square.setTextContent('');
            square.textContent = '';
            gameTurn = 1;
            square.setIsMarked(false);
            console.log(square.isMarked);
            console.log("The content for this square is " + square.getTextContent());
        })

        gameGrid.forEach((square) => {
            square.isMarked = false;
        })
    }

    const checkForWinner = () => {
        if (gameBoardSquares[0].getTextContent() === 'X' && gameBoardSquares[1].getTextContent() === 'X' && gameBoardSquares[2].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        } else if (gameBoardSquares[3].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[5].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        } else if (gameBoardSquares[6].getTextContent() === 'X' && gameBoardSquares[7].getTextContent() === 'X' && gameBoardSquares[8].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        } else if (gameBoardSquares[0].getTextContent() === 'X' && gameBoardSquares[3].getTextContent() === 'X' && gameBoardSquares[6].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[1].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[7].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'X' && gameBoardSquares[5].getTextContent() === 'X' && gameBoardSquares[8].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[0].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[8].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[6].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[0].getTextContent() === 'O' && gameBoardSquares[1].getTextContent() === 'O' && gameBoardSquares[2].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        } else if (gameBoardSquares[3].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[5].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        } else if (gameBoardSquares[6].getTextContent() === 'O' && gameBoardSquares[7].getTextContent() === 'O' && gameBoardSquares[8].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        } else if (gameBoardSquares[0].getTextContent() === 'O' && gameBoardSquares[3].getTextContent() === 'O' && gameBoardSquares[6].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[1].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[7].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'O' && gameBoardSquares[5].getTextContent() === 'O' && gameBoardSquares[8].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[0].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[8].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[6].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            resetBoard();
        }
    }

    return { gameGrid, turnTaken, getNumTurns, checkForWinner, resetBoard }
})()

gameBoardArray.forEach((square) => {
    Object.assign(square, gameSquare());
    gameBoard.gameGrid.push(square);
    square.addEventListener('click', () => {
        console.log('  WAT THE FUCK IS WRONG WITH THIS');
        console.log(square.getIsMarked());
        if (!square.getIsMarked()) {
            console.log('inside bullshit');
            square.markSquare();
            square.textContent = square.getTextContent();
            gameBoard.checkForWinner();
        }
    })
})

const player1 = (function () {
    let player1Name;
    let score = 0;
    const setName = (name) => {
        player1Name = name;
    }
    const getName = () => player1Name;
    let increaseScore = () => score++;
    const getScore = () => score;

    const takeTurn = () => gameBoard.turnTaken();
    return { takeTurn, setName, getName, increaseScore, getScore };
})()

const player2 = (function () {
    let player2Name;
    let score = 0;
    const setName = (name) => {
        player2Name = name;
    }
    const getName = () => player2Name;
    let increaseScore = () => score++;
    const getScore = () => score;

    const takeTurn = () => gameBoard.turnTaken();
    return { takeTurn, setName, getName, increaseScore, getScore };
})()

function gameSquare() {
    let isMarked = false;
    let squareTextContent = '';
    const getIsMarked = () => isMarked;
    const markSquare = () => {
        console.log('is tis even hitting')
        if (!isMarked) {
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
    const setTextContent = (content) => {
        squareTextContent = content;
        this.textContent = content;
    }
    const setIsMarked = (trueOrFalse) => {
        isMarked = trueOrFalse;
    }

    return { isMarked, getIsMarked, markSquare, getTextContent, setTextContent, setIsMarked };
}

player1Form.addEventListener('submit', (e) => {
    e.preventDefault();

    player1.setName(player1Name.value);

    console.log(player1.getName());

    player1Form.classList.add('inactive');

    player1Form.reset();
})

player2Form.addEventListener('submit', (e) => {
    e.preventDefault();

    player2.setName(player2Name.value);

    player2Form.classList.add('inactive');

    player2Form.reset();
})


