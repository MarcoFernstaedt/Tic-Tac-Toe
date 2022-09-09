// gameboard module
const GameBoard = (function () {
    let gameBoard = []
    return {};
})

// display controller module
const DisplayController (function () {
    // come back later
})

// Create player Factory Functrion
const CreatePlayer = (playerName, playerNumber, playerXO) => {
    return { playerName, playerNumber, playerXO }
}

const Marco = CreatePlayer('Marco', 1, 'X')
const Grace = CreatePlayer('Grace', 2, 'O')