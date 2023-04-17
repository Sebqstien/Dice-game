// variables
let randomNumber = 0;
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];

// Get new game button
const newGame = document.querySelector('#new-game');
// Get the Dice
const dice = document.querySelector('#dice');
// Get Hold button
const holdButton = document.querySelector('#hold')
// Get Roll button
const rollButton = document.querySelector('#roll')
// Get Player
const player0 = document.querySelector('.player-0')
const player1 = document.querySelector('.player-1')

/** Start a New Game */
function replay() {
    document.location.reload()
}

/** Roll the dice and display the round score */
const rollDice = () => {
    // Create a random number
    randomNumber = Math.floor(Math.random() * 6) + 1;

    // Display dice
    dice.innerHTML = `<img class="dice rounded" src="./images/dice/dice-${randomNumber}.png" alt="dice ${randomNumber}">`;

    // Round score
    if (randomNumber !== 1) {
        roundScore += randomNumber;
        // Display round score
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        changePlayer();
    }
};

/** Change player */
const changePlayer = function () {
    roundScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("active-player");
    player1.classList.toggle("active-player");
};

/** Hold the score */
const holdScore = function () {
    // add current score
    scores[activePlayer] += roundScore;
    // display score
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    // check player score
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.playerName-${activePlayer}`).classList.add("winner-player");
        document.querySelector(`.playerName-${activePlayer}`).innerHTML = `<p>winner !</p>`;
        roll.classList.add('remove');
        hold.classList.add('remove');

        // Music winner
        let audio = new Audio('music.mp3');
        audio.play();

        // Confetti animation
        confetti();

    } else {
        // Change player
        changePlayer();
    }
};

// Listen event on clik
newGame.addEventListener('click', replay, false);
roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);
