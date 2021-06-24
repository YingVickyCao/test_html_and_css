// sum function is "pure": not change it's inputs
function sum(a, b) {
    return a + b;
}

//  impure:  depressed
function withdraw(account, amount) {
    account.total -= amount;
}
export { sum, withdraw };