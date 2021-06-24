export function loop() {
    test_for();
    test_while();
    test_do_while();
}

function test_for() {
    for (let i = 1; i < 5; i++) {
        // 1,2,3,4
        console.log(i);
    }
    console.log("\n");

    for (let i = 6; i < 5; i++) {
        console.log(i); // not invoked
    }
    console.log("\n");
}

function test_while() {
    let i = 1;
    while (i < 5) {
        // 1,2,3,4
        console.log(i);
        i++;
    }
    console.log("\n");

    i = 6;
    while (i < 5) {
        console.log(i); // not invoked
        i++;
    }
    console.log("\n");
}

function test_do_while() {
    let i = 1;
    do {
        // 1,2,3,4
        console.log(i);
        i++;
    } while (i < 5)
    console.log("\n");

    i = 6;
    do {
        // 6
        console.log(i);
        i++;
    } while (i < 5)
    console.log("\n");
}