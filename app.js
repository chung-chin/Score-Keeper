const resetButton = document.querySelector('#reset');
const rematchButton = document.querySelector('#rematch');
const playTo = document.querySelector('#playto');

let maxScore = parseInt(playTo.value);
let endGame = false;
let zeroScore = true;

const p1 = {
    score: 0,
    buttonIncrease: document.querySelector('#p1Increase'),
    buttonDecrease: document.querySelector('#p1Decrease'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    buttonIncrease: document.querySelector('#p2Increase'),
    buttonDecrease: document.querySelector('#p2Decrease'),
    display: document.querySelector('#p2Display')
}

p1.buttonIncrease.addEventListener('click', function () {
    scoreIncrease(p1, p2);
})

p2.buttonIncrease.addEventListener('click', function () {
    scoreIncrease(p2, p1);
})

p1.buttonDecrease.addEventListener('click', function () {
    scoreDecrease(p1, p2);
})

p2.buttonDecrease.addEventListener('click', function () {
    scoreDecrease(p2, p1);
})

function scoreIncrease(player, another) {
    if (!endGame) {
        player.score += 1;
        player.buttonDecrease.disabled = false;
        player.display.textContent = player.score;
        if (player.score === maxScore) {
            player.display.style.color = "green";
            another.display.style.color = "red";
            endGame = true;
            player.buttonIncrease.disabled = true;
            another.buttonIncrease.disabled = true;
        }
    }
}

function scoreDecrease(player, another) {
    if (endGame) {
        if (player.score === maxScore) {
            player.score -= 1;
            player.display.textContent = player.score;
            player.display.style.color = "";
            another.display.style.color = "";
            player.buttonIncrease.disabled = false;
            another.buttonIncrease.disabled = false;
            endGame = false;
        } else {
            player.score -= 1;
            player.display.textContent = player.score;
        }
    } else {
        player.score -= 1;
        player.display.textContent = player.score;
    }

    if (player.score === 0) {
        player.buttonDecrease.disabled = true;
    }
}

playTo.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    rematch();
})

rematchButton.addEventListener('click', rematch)

function rematch() {
    endGame = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.style.color = "";
        p.buttonIncrease.disabled = false;
        p.buttonDecrease.disabled = true;
    }
}