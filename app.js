
const score1 = document.querySelector('#score1')

const player1_button = document.querySelector('#player1')

const score2 = document.querySelector('#score2')

const player2_button = document.querySelector('#player2')

const reset = document.querySelector('#reset')

const rounds = document.querySelector('#rounds')

const warning = document.querySelector('#warning')

rounds.value = ""

warning.innerText = ""

player1_button.addEventListener('click', function (e) {
    if (rounds.value === "") {
        warning.innerText = "Select rounds first"
        setTimeout(() => {
            warning.innerText = ""
        }, 1500)
    }

    if (score1.innerText < parseInt(rounds.value)) {
        let point = parseInt(score1.innerText)
        point++
        let result = point.toString()
        score1.innerText = result
    }

    if (score1.innerText === rounds.value || score2.innerText === rounds.value) {
        player1_button.disabled = true
        player2_button.disabled = true
        rounds.disabled = true
    }

    if (player1_button.disabled === true &&
        player2_button.disabled === true) {
        if (score1.innerText > score2.innerText) {
            score1.classList.add('colorWin')
            score2.classList.add('colorLoss')
            warning.innerText = "Player 1 wins!"
            warning.classList.add('colorWin')
        }

        else {
            score1.classList.add('colorLoss')
            score2.classList.add('colorWin')
            warning.innerText = "Player 2 wins!"
            warning.classList.add('colorWin')
        }
    }
})


player2_button.addEventListener('click', function (e) {
    if (rounds.value === "") {
        warning.innerText = "Select rounds first"
        setTimeout(() => {
            warning.innerText = ""
        }, 1500)
    }

    if (score2.innerText < parseInt(rounds.value)) {
        let point = parseInt(score2.innerText)
        point++
        let result = point.toString()
        score2.innerText = result
    }

    if (score1.innerText === rounds.value || score2.innerText === rounds.value) {
        player1_button.disabled = true
        player2_button.disabled = true
        rounds.disabled = true
    }

    if (player1_button.disabled === true &&
        player2_button.disabled === true) {
        if (score1.innerText > score2.innerText) {
            score1.classList.add('colorWin')
            score2.classList.add('colorLoss')
            warning.innerText = "Player 1 wins!"
            warning.classList.add('colorWin')
        }

        else {
            score1.classList.add('colorLoss')
            score2.classList.add('colorWin')
            warning.innerText = "Player 2 wins!"
            warning.classList.add('colorWin')
        }
    }
})


rounds.addEventListener('change', function () {
    score1.innerText = "0"
    score2.innerText = "0"
})


reset.addEventListener('click', function (e) {
    score1.innerText = "0"
    score1.classList.remove('colorWin', 'colorLoss')
    score2.innerText = "0"
    score2.classList.remove('colorWin', 'colorLoss')
    rounds.value = "0"
    warning.innerText = ""
    player1_button.disabled = false
    player2_button.disabled = false
    rounds.disabled = false
    warning.classList.remove('colorWin')
})

