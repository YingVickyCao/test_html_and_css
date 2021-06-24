/**
 * const:
 * 必须初始化
 * 若对象，则不能改变指向。
 * 若primitive，则不能改变值
 *
 * let:
 * 所在代码块有效，对函数外部无影响。
 * 不能重复定义同名
 * disable hosting
 *
 * var:
 * 不用初始化，不初始化时，value = undefined
 * 能重复定义同名
 * enable hosting
 *
 * hosting: 声明提升
 * 定义：将声明（变量声明，函数声明）移动到当前作用域顶端的默认行为。目的是在声明之前调用
 */
export function test_scope_and_define_variables() {
	test_var();
	test_const();
	test_let();
	test_global();
	test_local();
	test_block();
	test_block_redefine();
}

function test_const() {
	// const
	const obj2 = { a: 1, b: 2 };
	obj2.a = 4;
	console.log(obj2); // {a: 4, b: 2}
	// obj2 = obj1;  // ERROR: TypeError: Assignment to constant variable

	const var4 = 5;
	// var1 = 6;  // ERROR: TypeError: Assignment to constant variable.
	console.log(var4); // 5

	// const var5;  // ERROR: Parsing error: Unexpected token
}

function test_let() {
	// let
	let obj1 = { a: 1, b: 2 };
	obj1.a = 2;
	console.log(obj1); // {a: 2, b: 2}

	let var1 = 5;
	var1 = 6;
	console.log(var1); // 6
	// let var2 = 5;  // ERROR: Parsing error: Identifier 'var2' has already been declared
}

function test_var() {
	// var
	console.log(var10);
	var var10 = 10;
	console.log(var10); // 10
	var var10 = 10;
	console.log(var10); // 10

	var var11;
	console.log(var11); // undefined
}

// 作用域 有三种： 全局变量，局部变量，块作用域（es6+）
/**
 * 全局变量
 * 函数外声明的变量:let + var
 * js 程序的任何地方都可以访问
 */
export function test_global() {
	console.log(global_var); // Global
	console.log(global_var_2); // Global let
	// console.log(local_var); // ERROR: 'local_var' is not defined  no-undef
}

/**
 * 局部变量
 * 函数内声明的变量:let + var
 * 局部/函数内
 */
export function test_local() {
	var local_var = 'local let';
	console.log(global_var); // Global
	console.log(global_var_2); // Global let
	console.log(local_var); // Local

	let local_var2 = 'local let';
	console.log(local_var2); // local let
}

/**
 * 块级作用域(Block Scope): ES6 +
 * var:
 * not block，out {} can be access.
 * {} override func.
 *
 * let:
 * lock, out {} can not  be access
 * {} can not override func.
 */
export function test_block() {
	console.log(var1);
	{
		var var1 = 'var';
		let var2 = 'let';
		console.log(var1); // var
		console.log(var2);
	}
	console.log(var1); // var
	// console.log(var2);   // ERROR:'var2' is not defined  no-undef
}
export function test_block_redefine() {
	var var1 = 'var in func'; // var in func
	let var2 = 'let in func'; // let in func

	console.log(var1);
	{
		var var1 = 'var in {}';
		let var2 = 'let in {}';
		console.log(var1); // var in {}
		console.log(var2); // let in {}
	}
	console.log(var1); // var in {}
	console.log(var2); // let in func
}

var global_var = 'Global';
let global_var_2 = 'Global let';

var g1 = return_global_var();
var g2 = return_global_var();
var g3 = return_global_var2();
function return_global_var() {
	return {
		g_value: 1
	};
}

function return_global_var2() {
	return {
		g_value: 2
	};
}

export function test_return_global_var_twice() {
	console.log(g1);
	console.log(g2);
	console.log(g3);
	console.log(g1 === g2); // false
	console.log(g1 === g3); // false
}
