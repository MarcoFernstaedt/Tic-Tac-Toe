const player1 = ['name', 'X']
const player2 = ['name', 'O']
let XCount = 0
let OCount = 0

const gameboard = (function () {
    let game = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

    return { game };
}())

const gameFlow = (function () {
    createPlayer()

    let currentPlayer = setCurrentPlayer('X')
    console.log(currentPlayer)
    // for (i = 0; i < gameboard.game.length; i++) {
    //     if (gameboard.game[i] === 'X') {
    //         XCount++
    //     } else if (gameboard.game[i] === 'O') {
    //         OCount++
    //     }
    // }

    // return { currentPlayer, previousPlyaer }
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
            for (i = 0; i < gameboard.game.length; i++) {
                if (gameboard.game[i] === 'X') {
                    XCount++
                } else if (gameboard.game[i] === 'O') {
                    OCount++
                }
            }

            if (XCount > OCount) {
                setCurrentPlayer('O')
                console.log('player2\'s turn now')
            }

            if (OCount === XCount) {
                setCurrentPlayer('X')
                console.log('player1\'s turn')
            }


            let index = tile.dataset.number
            gameboard.game[index] = getCurrentPlayer.currentPlayer;
            console.log(getCurrentPlayer.currentPlayer)
            console.log(gameboard.game)
            tile.textContent = gameboard.game[index]
        })
    })
    return { tiles }
}

renderToScreen()

function getCurrentPlayer(currentPlayer) {
    let newCurrentPlayer = gameFlow.currentPlayer
    return { newCurrentPlayer }
}

function setCurrentPlayer(player) {
    return { player }
}
