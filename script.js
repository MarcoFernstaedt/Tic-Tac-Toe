const gameboard = (function () {
    let game = ['X']
    return { game };
}())

const gameFlow = (function () {
    let playerName1 = prompt('Please Enter Your Name: ')
    let playerName2 = prompt('Please Enter Your Name: ')
    let player1 = createPlayer(playerName1)
    let player2 = createPlayer(playerName2)

    return console.log(player1, player2)
    // {
    //     p1: player1.playerNumber,
    //     p2: player2.playerNumber,
    // }
}())

function createPlayer(playerName) {
    let assignMark = ['X', 'O']
    let assignNumber = [1, 2]
    let playerOX = ''
    let playerNumber = ''

    if (playerName !== '' || playerName !== null) {
        playerOX = assignMark[1]
        playerNumber = assignNumber[1]
    } else {
        console.log('error')
    }
    return { playerName, playerNumber, playerOX }
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