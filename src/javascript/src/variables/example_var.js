name = 'Chris';

export function var_hoisting() {
    console.log(name);
}

// 变量提升：在初始化一个变量之后用 var 声明它，它仍然可以工作
var name;

export  function redeclared() {
    var myName = 'Chris';
    console.log(myName);    // Chris

    var myName = 'Bob';
    console.log(myName);    // Bob
}