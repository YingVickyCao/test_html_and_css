function test() {
    const guessSubmit = document.querySelector('.guessSubmit');
    guessSubmit.addEventListener('click', checkGuess);
}

function checkGuess() {
    console.log("Click submit");
}