export function comparison_op() {
    let str = 'abc';
    // Equal
    if (str === 'abc') {
        console.log('Equal')
    } else {
        console.log('Not Equal')
    }

    let guessCount = 10;
    if (guessCount === 1) {
        console.log('equal');
    } else {
        console.log('not equal');
    }

    let num = 10
    if (num !== 10) {
        console.log('Not Equal 10 ')
    } else {
        console.log('Equal 10')
    }

    if (guessCount <= 1) {
        console.log('<1');
    } else if (guessCount === 1) {
        console.log('=1');
    } else {
        console.log('>1');
    }

    if (guessCount <= 1) {
        console.log('<1');
    } else if (guessCount === 1) {
        console.log('=1');
    }
}