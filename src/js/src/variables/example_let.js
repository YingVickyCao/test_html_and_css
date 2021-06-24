// ERROR: Uncaught ReferenceError: Cannot access 'name' before initialization
// name = 'Chris';

export function var_hoisting() {
    // console.log(name);
}

// let 没有 变量提升
// let name;

export  function redeclared() {
    let myName = 'Chris';
    console.log(myName);    // Chris

    // ERROR:Blocked scoped variables cannot be redeclared
    // let myName = 'Bob';
    myName = 'Bob';
    console.log(myName);    // Bob
}