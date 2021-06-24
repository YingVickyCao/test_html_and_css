let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

// 用一个 CSS选择器 可以选中需要引用的元素
// 创建一个 guesses 常量来存储对 HTML 中的文本输入表单域的引用
const guess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
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

    if (guessCount === 1) {
        guess.textContent = tip_guessedLastNum;
    }
    guess.textContent += userGuessNum + " ";

    if (userGuessNum === randomNum) {
        lastResult.textContent = tip_guessedRight;
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = ' ';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = tip_gameOver;
        setGameOver();
    } else {
        lastResult.textContent = tip_guessedWrong;
        lastResult.style.backgroundColor = 'red';

        if (userGuessNum < randomNum) {
            lowOrHi.textContent = tip_guessedLow;
        } else if (userGuessNum > randomNum) {
            lowOrHi.textContent = tip_guessedHigh;
        }
    }
    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
console.log("add addEventListener for guessSubmit");

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = tip_gameStart;
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelector(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ' ';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessField.value = ' ';
    guessField.focus();

    guessSubmit.disabled = false;

    lastResult.style.backgroundColor = 'white';

    randomNum = Math.floor(Math.random() * 100) + 1;
}

