export function data_type_string() {
    simple();
    escaping();
    joined();
    treatStringAsObject();
    changeCase();
    updateParts();
}

function simple() {
    let str = 'thanks';
    console.log(str);
}

// 单引号和双引号
// 转义 字符串中的字符
function escaping() {
    let str2 = " a 'b' c";
    console.log(str2);  //  a 'b' c

    let str3 = ' a "b" c';
    console.log(str3);  //  a "b" c

    // let str4 = " a "b" c";   // ERROR:不能在字符串中包含相同的引号
    // let str4 = ' a 'b' c';   // ERROR:不能在字符串中包含相同的引号

    // Escaping characters in a string
    let str5 = ' a \'b\' c';
    console.log(str5);          //  a 'b' c
    let str6 = " a \"b\" c";
    console.log(str6);          //   a "b" c
}

// 连接字符串
function joined() {
    let str1 = 'A' + "," + 'B';
    console.log(str1);  // A,B

    // 弹出对话框
    let name = prompt('Input name: ');
    // 弹出Alert
    alert("Hi, " + name);

    let str2 = '123';
    let num2 = Number(str2);
    console.log(typeof num2);    // number
    console.log(num2);           // 123

    let num3 = 123;
    let str3 = num3.toString();
    console.log(typeof str3);    // string
    console.log(str3);           // 123


    let str4 = '123A';
    let num4 = Number(str4);
    console.log(typeof num4);    // number
    console.log(num4);           // TODO:NaN
}

function treatStringAsObject() {
    // printLength();
    // retrievingCharacter();
    findExtractSubstring();
}

function printLength() {
    const str = 'AB';
    console.log(str.length);    // 2
}

function retrievingCharacter() {
    const str = '1234';
    console.log(str[0]);    // 1
    console.log(str.length - 1);    // 3
}

// indexOf， slice
function findExtractSubstring() {
    const str = '1234';

    const r1 = str.indexOf('23');
    if (r1 !== -1) {
        // 提取从第一个位置开始，直到但不包括最后一个位置
        console.log(str.slice(r1, r1 + "23".length));   //  23
        // 从提取位置到string结束
        console.log(str.slice(r1)); //  234
        console.log('Exist');
    } else {
        console.log('Not Exist');
    }
    console.log(r1); // 1:Exist

    const r2 = str.indexOf('23456');
    if (r2 !== -1) {
        console.log('Exist');
    } else {
        console.log('Not Exist');
    }
    console.log(r2); // -1:Not exist

    console.log(str.indexOf('567')); // -1:Not exist
}

function changeCase() {
    let name = 'my Name IS MuD';
    console.log(name.toLowerCase());    // my name is mud
    console.log(name.toUpperCase());    // MY NAME IS MUD
}

function updateParts() {
    let str1 = "AmozBcD";
    console.log(str1.replace('moz', 'van'));// AvanBcD 替换

    let str2 = "AMozBcD";
    console.log(str2.replace('moz', 'van'));// AMozBcD 没有替换。区分大小写

    let str3 = "AmoozBcD";
    console.log(str3.replace('moz', 'van'));// AmoozBcD  没有替换。必须完全匹配
}
