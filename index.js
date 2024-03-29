const gameBoardSquares = document.querySelectorAll('.square');
const gameBoardArray = Array.from(gameBoardSquares);
const player1Name = document.querySelector('#name-1');
const player2Name = document.querySelector('#name-2');
const player1Form = document.querySelector('#player1');
const player2Form = document.querySelector('#player2');
const player1Info = document.querySelector('#player1Info');
const player2Info = document.querySelector('#player2Info');
const player1NameDisplay = document.querySelector('#player1-name');
const player2NameDisplay = document.querySelector('#player2-name');
const player1Score = document.querySelector('#player1score');
const player2Score = document.querySelector('#player2score');

const player1 = (function () {
    let player1Name = '';
    let score = 0;
    const setName = (name) => {
        player1Name = name;
    }
    const getName = () => player1Name;
    let increaseScore = () => score++;
    const getScore = () => score;

    const updateDisplayScore = () => {
        player1Score.textContent = 'Rounds won: ' + getScore();
    }

    const takeTurn = () => gameBoard.turnTaken();
    return { takeTurn, setName, getName, increaseScore, getScore, updateDisplayScore };
})()

const player2 = (function () {
    let player2Name = '';
    let score = 0;
    const setName = (name) => {
        player2Name = name;
    }
    const getName = () => player2Name;
    let increaseScore = () => score++;
    const getScore = () => score;

    const updateDisplayScore = () => {
        player2Score.textContent = 'Rounds won: ' + getScore();
    }

    const takeTurn = () => gameBoard.turnTaken();
    return { takeTurn, setName, getName, increaseScore, getScore, updateDisplayScore };
})()

const gameBoard = (function () {
    const clickHandler = () => {
        alert('Please enter names before the game starts');
    };

    gameBoardArray.forEach((square) => {
        square.addEventListener('click', clickHandler)
    })
    let gameStarted = player1.getName() !== '' && player2.getName() !== '';
    gameGrid = [];
    let gameTurn = 1;
    gameBoardSquares.forEach((square) => {
        square = gameSquare();
        gameGrid.push(square);
    })
    const turnTaken = () => gameTurn++;
    const getNumTurns = () => gameTurn;

    const startGame = () => {
        if (player1.getName() !== '' && player2.getName() !== '') {
            gameBoardArray.forEach((square) => {
                Object.assign(square, gameSquare());
                gameBoard.gameGrid.push(square);
                square.removeEventListener('click', clickHandler);
                square.addEventListener('click', () => {
                    if (!square.getIsMarked()) {
                        square.markSquare();
                        square.textContent = square.getTextContent();
                        gameBoard.checkForWinner();
                    }
                })
            })
        }
    }

    const resetBoard = () => {
        gameBoardSquares.forEach((square) => {
            square.setTextContent('');
            square.textContent = '';
            gameTurn = 1;
            square.setIsMarked(false);
        })

        gameGrid.forEach((square) => {
            square.isMarked = false;
        })
    }

    const checkForWinner = () => {
        if (gameBoardSquares[0].getTextContent() === 'X' && gameBoardSquares[1].getTextContent() === 'X' && gameBoardSquares[2].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        } else if (gameBoardSquares[3].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[5].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        } else if (gameBoardSquares[6].getTextContent() === 'X' && gameBoardSquares[7].getTextContent() === 'X' && gameBoardSquares[8].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        } else if (gameBoardSquares[0].getTextContent() === 'X' && gameBoardSquares[3].getTextContent() === 'X' && gameBoardSquares[6].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[1].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[7].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'X' && gameBoardSquares[5].getTextContent() === 'X' && gameBoardSquares[8].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[0].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[8].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'X' && gameBoardSquares[4].getTextContent() === 'X' && gameBoardSquares[6].getTextContent() === 'X') {
            console.log('Player 1 is winner!');
            player1.increaseScore();
            player1.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[0].getTextContent() === 'O' && gameBoardSquares[1].getTextContent() === 'O' && gameBoardSquares[2].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        } else if (gameBoardSquares[3].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[5].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        } else if (gameBoardSquares[6].getTextContent() === 'O' && gameBoardSquares[7].getTextContent() === 'O' && gameBoardSquares[8].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        } else if (gameBoardSquares[0].getTextContent() === 'O' && gameBoardSquares[3].getTextContent() === 'O' && gameBoardSquares[6].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[1].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[7].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'O' && gameBoardSquares[5].getTextContent() === 'O' && gameBoardSquares[8].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[0].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[8].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        }
        else if (gameBoardSquares[2].getTextContent() === 'O' && gameBoardSquares[4].getTextContent() === 'O' && gameBoardSquares[6].getTextContent() === 'O') {
            console.log('Player 2 is winner!');
            player2.increaseScore();
            player2.updateDisplayScore();
            resetBoard();
        }
    }

    return { gameGrid, turnTaken, getNumTurns, checkForWinner, resetBoard, startGame, gameStarted }
})()

gameBoard.startGame();


// if (gameBoard.startGame()) {
//     console.log(gameBoard.startGame());
//     gameBoardArray.forEach((square) => {
//         Object.assign(square, gameSquare());
//         gameBoard.gameGrid.push(square);
//         square.addEventListener('click', () => {
//             if (!square.getIsMarked()) {
//                 square.markSquare();
//                 square.textContent = square.getTextContent();
//                 gameBoard.checkForWinner();
//             }
//         })
//     })
// }
// else {
//     gameBoardArray.forEach((square) => {
//         square.addEventListener('click', () => {
//             alert('Please enter names before the game starts')
//         })
//     })
// }

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

    player1Form.classList.add('inactive');

    player1Info.classList.add('active');

    player1NameDisplay.textContent = 'Player Name: ' + player1.getName();

    player1Score.textContent = 'Rounds Won: ' + player1.getScore();

    player1Form.reset();


    gameBoard.startGame();
})

player2Form.addEventListener('submit', (e) => {
    e.preventDefault();

    player2.setName(player2Name.value);

    player2Form.classList.add('inactive');

    player2Info.classList.add('active');

    player2NameDisplay.textContent = 'Player Name: ' + player2.getName();

    player2Score.textContent = 'Rounds Won: ' + player2.getScore();

    player2Form.reset();

    gameBoard.startGame();
})


