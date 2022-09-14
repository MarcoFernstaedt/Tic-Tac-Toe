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
    let playerOX = ''
    let playerNumber = ''
    let index = 1

    if (playerName !== '' || playerName !== null) {
        if (gameFlow.player1 === false) {
            playerOX = (function (index) {
                return 'X'
            }());
            assignNumber = (function (index) {
                return 1
            }());
            index++
            playerNumber = assignNumber
        } else {
            playerOX = (function (index) {
                return 'O'
            }());
            assignNumber = (function (index) {
                return 2
            }());
            index++
            playerNumber = assignNumber
        }

        // playerOX = assignMark[1]
        // playerNumber = assignNumber[1]
    } else {
        console.log('error')
    }
    console.log(playerOX, playerNumber)
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
