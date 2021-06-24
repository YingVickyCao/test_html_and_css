// null vs undefined
// null 表示无值，
// undefined 表示一个未声明的变量，或已声明但没有赋值的变量，或一个并不存在的对象属性。
function checkIsUndefined() {
	var data = undefined;
	if (typeof data == 'undefined') {
		console.log('data  is  undefined');
	}
}

function checkIsNull() {
	var data = null;
	if (!data && typeof data != 'undefined' && data != 0) {
		console.log('data is null');
	}
}

function checkIsEmpty() {
	var data = ' ';
	var data = null; // Uncaught TypeError: Cannot read property 'trim' of null
	if (data.trim().length == 0) {
		console.log('data 是空字符串');
	}
}

function checkIsEmptyObg() {
	// var data = {}; // data 是空对象
	var data = null; // undefined
	if (JSON.stringify(data) == '{}') {
		console.log('data 是空对象');
	}
}
