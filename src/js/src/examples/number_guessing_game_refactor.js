let randomNum;
resetRandomNum();

console.log(randomNum);

const guess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount;
resetGuessCount();

let resetButton;

const tip_guessedLastNum = "上次猜的数：";
const tip_guessedRight = "恭喜你！猜对了";
const tip_guessedWrong = "你猜错了！";
const tip_guessedHigh = "你猜高了！";
const tip_guessedLow = "你猜低了！";
const tip_gameOver = "!!!GAME OVER!!!";
const tip_gameStart = "开始新游戏";

function checkGuess() {
    let userGuessNum = Number(guessField.value);
    checkGuess_recordGuessNum(userGuessNum);
    if (userGuessNum === randomNum) {
        checkGuess_right();
    } else if (guessCount === 10) {
        checkGuess_tryMax();
    } else {
        checkGuess_wrong(userGuessNum);
    }
    checkGuess_prepareNextGuess();
}

function checkGuess_recordGuessNum(userGuessNum) {
    if (guessCount === 1) {
        guess.textContent = tip_guessedLastNum;
    }
    guess.textContent += userGuessNum + " ";
}

function checkGuess_right() {
    lastResult.textContent = tip_guessedRight;
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
    setGameOver();
}

function checkGuess_tryMax() {
    lastResult.textContent = tip_gameOver;
    setGameOver();
}

function checkGuess_wrong(userGuessNum) {
    lastResult.textContent = tip_guessedWrong;
    lastResult.style.backgroundColor = 'red';

    if (userGuessNum < randomNum) {
        lowOrHi.textContent = tip_guessedLow;
    } else if (userGuessNum > randomNum) {
        lowOrHi.textContent = tip_guessedHigh;
    }
}

function checkGuess_prepareNextGuess() {
    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = tip_gameStart;
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    resetGuessCount();
    resetRandomNum();

    guess.textContent = ' ';
    lastResult.textContent = ' ';
    lowOrHi.textContent = ' ';

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessField.value = ' ';
    guessField.focus();

    guessSubmit.disabled = false;

    lastResult.style.backgroundColor = 'white';
}

function resetRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1;
}

function resetGuessCount() {
    guessCount = 1;
}
