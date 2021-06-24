export function increment_op() {
    let count = 0;
    console.log(count++);   // 0
    console.log(count);     // 1

    let count2 = 0;
    console.log(++count2);   // 1
    console.log(count2);     // 1

    // console.log(3++); // ERROR:  Line 4:17:  Parsing error: Invalid left-hand side in postfix operation
}