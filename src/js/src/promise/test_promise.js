import { func } from 'prop-types';
import { test_promoise_al, test_promoise_race } from './test_promise_all_race';

//  https://www.cnblogs.com/sweeeper/p/8442613.html

export function test_promoise() {
	// use_chain_catch();
	// demonstrate_async_then();

	test_promoise_nomal();
	// test_promoise_al();
	// test_promoise_race();
}

const SECOND_1 = 1000;
let isLoading = true;

function cook() {
	console.log('cook start');
	let p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			// console.log('cook resolve');
			// resolve('cook resolve');

			console.log('cook reject');
			reject('cook reject');

			// throw new Error('throw: cook fail');
			// try {

			// } catch (ex) {

			// }
		}, SECOND_1);
	});
	return p;
}

function eat(data) {
	console.log('eat start. ' + data);
	let p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('eat resolve');
			resolve('eat resolve');
		}, SECOND_1);
	});
	return p;
}

function wash(data) {
	console.log('wash start. ' + data);
	let p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('wash resolve');
			resolve('wash resolve');

			// console.log('wash reject');
			// reject('wash reject');
		}, SECOND_1);
	});
	return p;
}

function test_promoise_nomal() {
	isLoading = true;

	//  cook -> eat -> wash
	// then : 链式调用。 分离回调方法，在异步执行完成后，用链式调用的方式执行回调函数
	// cook()
	// 	.then(function(data) {
	// 		return eat(data);
	// 	})
	// 	.then(function(data) {
	// 		return wash(data);
	// 	})
	// 	.then(function(data) {
	// 		console.log(data);
	// 	});

	// 简化代码
	// cook()
	// 	.then(eat)
	// 	.then(wash)
	// 	.then(function(data) {
	// 		console.log(data);
	// 	});

	// Only reject cook
	/**
	 	cook start
		cook reject
		cook onRejected: cook reject
		eat onRejected: cook reject
		wash onRejected: cook reject
		catch =>  cook reject
		finally: isLoading= false
	 */

	cook()
		.then(
			function(onFulfilledData) {
				console.log('cook onFulfilled:', onFulfilledData);
				return onFulfilledData;
			},
			onRejectedData => {
				console.log('cook onRejected:', onRejectedData);
				// throw new Error('[cook onRejected]');
				throw onRejectedData;
			}
		)
		// If catch is put middle，can stop remaining progress
		// .catch(function(e) {
		// 	console.log('middle catch', e);
		// })
		.then(function(data) {
			return eat(data);
		})
		.then(
			function(onFulfilledData) {
				console.log('eat onFulfilled:', onFulfilledData);
				return onFulfilledData;
			},
			onRejectedData => {
				console.log('eat onRejected:', onRejectedData);
				// throw new Error('[eat onRejected]');
				throw onRejectedData;
			}
		)
		.then(function(data) {
			return wash(data);
		})
		.then(
			function(onFulfilledData) {
				console.log('wash onFulfilled:', onFulfilledData.data);
				return onFulfilledData;
			},
			onRejectedData => {
				console.log('wash onRejected:', onRejectedData);
				// throw new Error('[wash onRejected]');
				throw onRejectedData;
			}
		)
		.catch(function(e) {
			console.log('catch => ', e);
		})
		.finally(function() {
			let isLoading = false;
			console.log('finally: isLoading=', isLoading);
		});
}

function demonstrate_async_then() {
	// using a resolved promise, the 'then' block will be triggered instantly,
	// but its handlers will be triggered asynchronously as demonstrated by the console.logs
	const resolvedProm = Promise.resolve(33);

	let thenProm = resolvedProm.then(value => {
		console.log('this gets called after the end of the main stack. the value received and returned is: ' + value);
		return value;
	});
	// instantly logging the value of thenProm
	console.log('1:', thenProm);

	// using setTimeout we can postpone the execution of a function to the moment the stack is empty
	setTimeout(() => {
		console.log('2', thenProm);
	});
}

function use_chain_catch() {
	var p1 = new Promise(function(resolve, reject) {
		resolve('Success');
	});

	p1.then(function(value) {
		console.log(value); // "Success!"
		throw new Error('oh, no!');
	})
		.catch(function(e) {
			console.error(e.message); // "oh, no!"
		})
		.then(
			function() {
				console.log('after a catch the chain is restored');
			},
			function() {
				console.log('Not fired due to the catch');
			}
		);
}
