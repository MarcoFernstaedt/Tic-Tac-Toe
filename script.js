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

    let currentPlayer = player1[1];
    let previousPlyaer = player2[1];

    // for (i = 0; i < gameboard.game.length; i++) {
    //     if (gameboard.game[i] === 'X') {
    //         XCount++
    //     } else if (gameboard.game[i] === 'O') {
    //         OCount++
    //     }
    // }

    return { currentPlayer, XCount, OCount }
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

            if (XCount > OCount && OCount !== XCount) {
                gameFlow.currentPlayer = player2[1]
                gameFlow.previousPlyaer = player1[1]
            }

            if (OCount > XCount && XCount !== OCount) {
                gameFlow.currentPlayer = player1[1]
                gameFlow.previousPlyaer = player2[1]
            }

            let index = tile.dataset.number
            gameboard.game[index] = gameFlow.currentPlayer;
            console.log(gameboard.game)

            tile.textContent = gameboard.game[index]
        })
    })
    return { tiles }
}

renderToScreen()

// function marker(mark) {

//     return { mark }
// }

