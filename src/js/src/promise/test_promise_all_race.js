// TODO:
/**
	all:
   case 1:
   正常情况：所有异步执行完才执行then 操作

   cutUp start. 
   boil start. 
   cutUp resolve
   boil resolve
   then onFulfilled :cutUp resolve,boil resolve

   case 2: reject cutUp
   异常情况：一旦any 操作 reject，立刻执行then onRejected，其他操作继续执行，不中断。

   cutUp start.
   boil start. 
   cutUp reject
   then onRejected:cutUp reject
   catch:cutUp reject
   boil resolve
 */
export function test_promoise_al() {
	Promise.all([cutUp(), boil()])
		.then(
			function(onFulfilledData) {
				console.log('then onFulfilled' + onFulfilledData);
			},
			function(onRejectedData) {
				console.log('then onRejected:' + onRejectedData);
				throw onRejectedData;
			}
		)
		.catch(function(e) {
			console.log('catch:' + e);
		});
}

/**
   race:
   race 使用场景：为request 请求设置超时.【requestUrl(), timeout()】

   case 1:
   正常情况：只要有一个异步执行完，就立刻执行then,其他没有执行完的异步操作继续执行，不停止。

   cutUp start. 
   boil start. 
   cutUp resolve
   then onFulfilledcutUp resolve
   boil resolve

    case 2: reject cutUp (=== race)
   异常情况：一旦any 操作 reject，立刻执行then onRejected，其他操作继续执行，不中断。

   cutUp start.
   boil start. 
   cutUp reject
   then onRejected:cutUp reject
   catch:cutUp reject
   boil resolve
 */
export function test_promoise_race() {
	Promise.race([cutUp(), boil()])
		.then(
			function(onFulfilledData) {
				console.log('then onFulfilled' + onFulfilledData);
			},
			function(onRejectedData) {
				console.log('then onRejected:' + onRejectedData);
				throw onRejectedData;
			}
		)
		.catch(function(e) {
			console.log('catch: ' + e);
		});
}

const SECOND = 2000;

function cutUp() {
	// 切菜
	console.log('cutUp start. ');
	let p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('cutUp resolve');
			resolve('cutUp resolve');

			// console.log('cutUp reject');
			// reject('cutUp reject');
			// throw new Error('throw error in cutUp'); // can not thow an error  in new Promise
		}, SECOND);
	});
	return p;
}

function boil() {
	// 晒水
	console.log('boil start. ');
	let p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('boil resolve');
			resolve('boil resolve');

			// console.log('boil reject');
			// reject('boil reject');
		}, SECOND);
	});
	return p;
}
