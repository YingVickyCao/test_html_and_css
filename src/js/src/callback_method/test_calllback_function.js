//

/**
 * www.cnblogs.com/moxiaowohuwei/p/8438236.html
 * <pre>
 
 1 Callback function (回调函数) ?
 A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
  
 2 回调函数的好处？
 避免重复代码，可读性
 一般在异步编程，事件监听处理、定时器计时等。

 3 分类？
 同步回调，异步回调

 </pre>
 */

/**
 <pre>
 异步回调
 
 f3 -> f1 -> f2: f1为耗时操作，f2需要f1的执行结果.
 </pre>
 */
export function test_async_callback_function() {
	function f1(n1, n2, callback) {
		console.log('f1 ,start');
		setTimeout(function() {
			// f1 task code
			console.log('f1 ,do start');
			var result = n1 + n2;
			var r = callback(result);
			console.log('f1 ,do end');
			return r;
		}, 2000);

		f3(n1, n2);
		console.log('f1 ,end');
	}

	// Test case 1
	var r = f1(1, 2, f2);
	console.log(r); // undefined
}

function f2(data) {
	var r = data * 10;
	console.log('f2 do,r=' + r);
	return r;
}

function f3(n1, n2) {
	console.log('f3 do (' + n1 + ',' + n2 + ')');
}

// 同步回调:f1 -> f2 -> f3
// use call function,start
export function test_sync_callback_function() {
	function f1(n1, n2, callback) {
		// f1 task code
		console.log('f1 ,start');
		var result = n1 + n2;
		var r = callback(result);
		f3(n1, n2);
		console.log('f1 ,do end');
		return r;
	}

	// Test case 1, 匿名回调
	// let r = f1(1, 2, function(data) {
	// 	console.log('f2, do');
	// 	var r = data * 10;
	// 	f3(1, 2);
	// 	return r;
	// });
	// console.log(r); // 30

	// let r2 = f1(3, 4, function(data) {
	// 	console.log('f2, do');
	// 	var r = data * 2;
	// 	return r;
	// });
	// console.log(r2); // 14

	// Test case 2, 有名回调
	let r3 = f1(1, 2, f2);
	console.log(r3); // 30
}

// use call function,end

// not use call function,start
export function test_no_callback_function() {
	var r = f1(1, 2);
	console.log(r); // 30

	var r2 = f1(3, 4);
	console.log(r2); // 14

	function f1(n1, n2, callback) {
		var result = n1 + n2;
		// ten(result);

		if (n1 == 1 && n2 == 2) {
			return ten_v1(result);
		} else if (n1 == 3 && n2 == 4) {
			return ten_v2(result);
		}
	}

	// function ten(data) {
	// 	var r = data * 10;
	// 	console.log('doSum', JSON.stringify(r));
	// 	return r;
	// }

	function ten_v1(data) {
		var r = data * 10;
		return r;
	}
	function ten_v2(data) {
		var r = data * 2;
		return r;
	}
}

// not use call function,start
