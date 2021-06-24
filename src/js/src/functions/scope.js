export function scope() {
    // TODO:
    output(x);  // 1
    // output(y); // ERROR ：  Line 3:12:  'y' is not defined  no-undef

    a();    // 2
}

let x = 1;

function a() {
    let y = 2;
    output(y);
}

function b() {
    let z = 3;
}

// output()它可以从任何地方被调用，因为它在全局作用域中被定义
function output(value) {
    console.log(value);
}