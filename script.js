const gameboard = (function () {
    let game = ['X']
    return { game };
}())

const gameFlow = (function () {
    createPlayer()

    // return { player1, player2 }
    // {
    //     p1: player1.playerNumber,
    //     p2: player2.playerNumber,
    // }
}())

function createPlayer(playerName) {
    let name1 = prompt('Enter player1 name')
    let name2 = prompt('Enter player2 name')

    const player1 = ['name', 'X']
    player1[0] = name1.toUpperCase()
    const player2 = ['name', 'O']
    player2[0] = name2.toUpperCase()

    console.log(player1, player2)
    return { player1, player2 }
};

function renderToScreen() {
    let tiles = document.querySelectorAll('.tiles')
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {

            tile.textContent = gameboard.game[0]
        })
    })
    return { tiles }
}

renderToScreen()
