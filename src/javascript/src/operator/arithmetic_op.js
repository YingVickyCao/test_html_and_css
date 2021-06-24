export function arithmetic_op() {
    plus()
}

function plus() {
    {
        let name = 'A';
        console.log(name);

        let hello = 'Hi';
        console.log(hello);

        let greeting = hello + "," + name;
        console.log(greeting);
    }
    {
        console.log(10 + 7);    // 17
        console.log(9 * 8);     // 72
        console.log(10 / 3);    // 3.3333333333333335
        console.log(10 % 3);    // 1

        // New
        console.log(2 ** 3);    // 8
        // Old
        console.log(Math.pow(2, 3));    // 8

        console.log(5 + 10 * 3);    //  35
        console.log(50 % 9 * 10);   //  50

        // 运算符优先级: JavaScript中的运算符优先级与学校的数学课程相同 - 乘法和除法总是先完成，然后加法和减法（总和总是从左到右进行评估）
        console.log(50 + 10 / 8 + 2);       // 53.25
        // 使用() 覆盖 覆盖运算符优先级
        console.log((50 + 10) / (8 + 2));   // 6
    }
}