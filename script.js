const gameboard = (function () {
    let game = ['X']
    return { game };
}())

const gameFlow = (function () {
    let playerName1 = prompt('Please Enter Your Name: ')
    let playerName2 = prompt('Please Enter Your Name: ')
    if (playerNumber !== 2) {
        let player1 = createPlayer(playerName1)
    } else {
        let player2 = createPlayer(playerName2)
    }

    return { playerName1.playerNumber, playerName2.playerNumber };
}())

function createPlayer(playerName) {
    let assignMark = ['X', 'O']
    let assignNumber = [1, 2]
    let playerOX = ''
    let playerNumber = ''

    if (playerName === '' || playerName == null) {
        alert('Please enter a valid name!')
        createPlayer(playerName)
    } else if (playerName !== '' || playerName !== null) {
        if (assignMark.length > 0) {
            playerOX = assignMark[0]
            playerNumber = assignNumber[0]
            assignMark.shift()
            assignNumber.shift()
        }
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