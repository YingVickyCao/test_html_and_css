// js async /sync method
var n = 1;
function a() {
	console.log(n);
	setTimeout(function() {
		n = 2;
		console.log(n);
	}, 500);
}

function b() {
	n = 3;
	console.log(n);
}

// n=1,3,2
export function test_async() {
	a();
	b();
}

export function test_sync() {
	a2();
	b2();
}

// n=1,2,3
function a2() {
	console.log(n);
	n = 2;
	console.log(n);
}

function b2() {
	n = 3;
	console.log(n);
}
