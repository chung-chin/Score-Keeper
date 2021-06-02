const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

let maxScore = parseInt(playTo.value);
let endGame = false;

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

p1Button.addEventListener('click', function () {
    scoreUp(p1, p2);
})

p2Button.addEventListener('click', function () {
    scoreUp(p2, p1);
})

function scoreUp(player, another) {
    if (!endGame) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === maxScore) {
            player.display.style.color = "green";
            another.display.style.color = "red";
            endGame = true;
            player.button.disabled = true;
            another.button.disabled = true;
        }
    }
}

playTo.addEventListener('change', function (){
    maxScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    endGame = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.style.color = "";
        p.button.disabled = false;
    }
}