export function logical_op() {
    and();
    or();
    not();
}

// &&
function and() {
    let choice = 'sunny';
    let temperature = 80;

    // Nice sunny
    if (choice === 'sunny' && temperature < 86) {
        console.log('Nice sunny');
    } else if (choice === 'sunny' && temperature >= 86) {
        console.log('Hot');
    }
}

// ||
function or() {
    let iceCreamVanOutside = true;
    let houseStatus = 'on fire';
    // You should leave the house quickly.
    if (iceCreamVanOutside || houseStatus === 'on fire') {
        console.log('You should leave the house quickly.');
    } else {
        console.log('Probably should just stay in then.');
    }
}

// !
function not() {
    let iceCreamVanOutside = true;
    let houseStatus = 'on fire';
    // You should leave the house quickly.
    if (!iceCreamVanOutside || houseStatus === 'on fire') {
        console.log('You should leave the house quickly.');
    } else {
        console.log('Probably should just stay in then.');
    }
}