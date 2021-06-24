// https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
// 1 simple function
function hello(desc) {
    console.log(this + " Hi," + desc);
}

// wrong use: when load this js file, invoked.
// hello("ZZZZZ");
// hello.call(window, "World");
// hello.call("abc", "World");
function test_simple_function() {
    hello("ZZZZZ"); // es5, this = unfined
    hello.call(window, "World");    //  es5, this = window
    hello.call("abc", "World");     //  es5, this = "abc"
}

// 2 Member Functions
var person = {
    name: "Pretty Tiger",
    hello: function (desc) {
        console.log(this + " says  " + desc);
    }
}

function test_member_function() {
    person.hello("Red");                // this = object(person)
    person.hello.call(person, "Red");    // this = object(person)
}

var person2 = { name: "Pretty Tiger" };
person2.hello = hello;
function test_member_function2() {
    person2.hello("Red"); // this = object(person2)
}

// 3 Usinf Function.prototype.bind
function test_bind() {
    var boundHelllo = function (desc) {
        return person.hello.call(person, desc);
    }
    boundHelllo("Red"); // this = object(person)
}
// 4 Arrow function expression
function sum(a){
    return a+ 1;
}
 var sum2 = (a) => {
    return a+ 1;
}
 var sum3 = (a) =>  a+ 1;

function test_arrow_express(){
   console.log(sum(2)); // 3
   console.log(sum2(2)); // 3
   console.log(sum3(2)); // 3
}
export function test_this() {
    // test_simple_function();
    // test_member_function();
    // test_member_function2();
    // test_bind();
    test_arrow_express();
}