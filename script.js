const player1 = ['name', 'X']
const player2 = ['name', 'O']

const gameboard = (function () {
    let game = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    return { game };
}())

const gameFlow = (function () {
    createPlayer()

    let currentPlayer = player1
    let previousPlyaer = null;
    // while (true) {
    //     if (currentPlayer === player1) {
    //         marker(currentPlayer[1])
    //         previousPlyaer = currentPlayer
    //         currentPlayer = player2
    //     } else {
    //         marker(currentPlayer[1])
    //         previousPlyaer = createPlayer
    //         currentPlayer = player1
    //     }
    // }

    return { currentPlayer }
}())

function createPlayer(playerName) {
    let name1 = prompt('Enter player1 name')
    let name2 = prompt('Enter player2 name')

    player1[0] = name1.toUpperCase()
    player2[0] = name2.toUpperCase()

    return { player1, player2 }
};

function renderToScreen() {
    let tiles = document.querySelectorAll('.tiles')
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            let index = tile.dataset.number
            gameboard.game[index] = gameFlow.currentPlayer[1]
            tile.textContent = gameboard.game[index]
        })
    })
    return { tiles }
}

renderToScreen()

function marker(mark) {

    return { mark }
}

