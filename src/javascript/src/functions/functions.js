export function functions() {
    named_function();
    anonymous_function();

    let r3 = sum_3(2, 3);
    console.log('sum_3:', r3); // 5

    // let r4 = sum_4(2, 3);
    // console.log("sum_4:", r4);    // 5

    func_is_obj(2, 3);
    arrow_func();
    console.log(arrow_func());  // undefined
}

function named_function() {
    let r1 = sum_1(2, 3);
    console.log('sum_1:', r1); // 5
}

function anonymous_function() {
    sum_2(2, 3);

    let r2 = sum_2(2, 3);
    console.log('sum_2:', r2); // 5

    sayHi();
}

// 函数声明
function sum_1(n1, n2) {
    return n1 + n2;
}

/**
 * 匿名函数
 * 函数表达式：
 * 使用变量名调用
 */
let sum_2 = function (n1, n2) {
    // ES5
    return n1 + n2;
};

// 匿名函数
let sayHi = function () {
    console.log('Hi');
};

/**
 * 箭头函数：是函数表达式。
 * 没有this；
 * disable hosting；
 * 必须使用前看先定义；
 * const vs var，const 更安全：常量值。
 */
const sum_2_2 = (n1, n2) => {
    // ES6
    return n1 + n2;
};

/**
 * Function()构造器
 */
var sum_3 = new Function('n1', 'n2', 'return n1 + n2');

// TODO:自调用函数：
// 自己调用自己. 声明完了，马上进行调用，只能使用一次.因此适合仅仅做一次操作的初始化操作
(function (n1, n2) {
    // 匿名
    return n1 + n2;
})(2, 3);
(function sum_4(n1, n2) {
    return n1 + n2;
})(2, 3);

// 函数是对象，因为属性和方法
function func_is_obj(n1, n2) {
    console.log(typeof func_is_obj); // function
    console.log(arguments.length); // 2
}

function arrow_func() {
    let r3 = sum_2_2(2, 3);
    console.log('sum_2_2:', r3); // 5
}
