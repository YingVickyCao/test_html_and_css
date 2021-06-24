import _ from 'lodash';

// Split into arrays
export function test_chunk() {
	var arr = ['a', 'b', 'c', 'd'];
	var result1 = _.chunk(arr, 2);
	/**
	 * ['a', 'b']
	 * ['c', 'd']
	 */
	console.log(result1);
	var result2 = _.chunk(arr, 3);
	/**
	 * ['a', 'b', 'c']
	 * ['d']
	 */
	console.log(result2);
}

export function test_compact() {
	var obj1 = {
		a: 10,
		b: 20
	};
	var obj2 = null;
	var obj3 = undefined;

	var arr = [0, 1, 2, false, true, null, undefined, NaN, obj1, obj2, obj3, '', 'A'];
	var r = _.compact(arr);
	/**
     [1,2,true,{a: 10, b: 20},"A"]
     */
	console.log(r);

	/**
	 *  0:1
	 *  1:2
	 */
	console.log([1, 2]);

	var r2 = _.compact([0, 1, false, 2, '', 3]);
	console.log(r2); // [1,2,3]
}

export function test_concat() {
	var arry = [1];
	var r = _.concat(arry, 2, [3], [[4]]);
	console.log(r); // [ 1,2,3,[4] ]
}

// execlude
export function test_difference() {
	console.log(_.difference([1, 2], [2, 3])); // [1]
	console.log(_.difference([2, 1], [2, 3])); // [1]
	console.log(_.difference([3, 2, 1], [2, 3])); // [1]
	console.log(_.difference([1, 5, 3, 2, 4], [2, 3])); // [1,,4]
}

export function test_differenceBy() {
	var r1 = _.differenceBy([2.1, 1.2], [2.3, 3.3], Math.floor);
	console.log(r1); // [1.2]

	var r2 = _.differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }], 'x');
	console.log(r2); // [{ x: 2 }]

	var r3 = _.differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }], 'x');
	console.log(r3); // [{ x: 2 }]

	var r4 = _.differenceBy([{ x: 1 }, { x: 2 }], { x: 1 }, 'x');
	console.log(r4); // [{ x: 1 } ,{ x: 2 }]

	var r5 = _.differenceBy([{ x: 1, y: 2 }, { x: 2, y: 3 }], [{ x: 1 }], 'x');
	console.log(r5); // [{ x: 2,y:3 }]

	var r6 = _.differenceBy([{ x: 1, y: 2 }, { x: 2, y: 3 }], [{ x: 1, y: 3 }], 'x');
	console.log(r6); // [{ x: 2,y:3 }]
}

export function test_differenceWith() {
	var arry = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
	const r1 = _.differenceWith(arry, [{ x: 1, y: 2 }], _.isEqual);
	console.log(r1); // [{x:2,y:1}]

	const r2 = _.differenceWith(arry, [{ x: 2, y: 3 }], _.isEqual);
	console.log(r2); // [{ x: 1, y: 2 }, { x: 2, y: 1 }]
}

// drop number items
export function test_drop() {
	var arry = [1, 2, 3, 4];

	const r1 = _.drop(arry);
	console.log(r1); // [2, 3, 4]

	const r2 = _.drop(arry, 0);
	console.log(r2); // [1, 2, 3, 4]

	const r3 = _.drop(arry, 1);
	console.log(r3); // [2, 3, 4]

	const r4 = _.drop(arry, 4);
	console.log(r4); // []

	const r5 = _.drop(arry, 5);
	console.log(r5); // []
}

export function test_dropRight() {
	var arry = [1, 2, 3, 4];

	const r1 = _.dropRight(arry);
	console.log(r1); // [1, 2, 3]

	const r2 = _.dropRight(arry, 0);
	console.log(r2); // [1, 2, 3, 4]

	const r3 = _.dropRight(arry, 1);
	console.log(r3); // [1, 2, 3]

	const r4 = _.dropRight(arry, 4);
	console.log(r4); // []

	const r5 = _.dropRight(arry, 5);
	console.log(r5); // []
}

//  TODO: dropRightWhile
export function test_dropRightWhile() {
	var array = [{ name: 'A', active: true }, { name: 'B', active: false }, { name: 'C', active: false }];

	const r1 = _.dropRightWhile(array, function(item) {
		return !item.active;
	});
	console.log(r1); // [{ name: 'A', active: true }]

	const r2 = _.dropRightWhile(array, function(item) {
		return item.active;
	});
	console.log(r2); //  [{ name: 'A', active: true }, { name: 'B', active: false }, { name: 'C', active: false }]
}

// TODO: dropWhile
// Elements are dropped until predicate returns falsey
export function test_dropWhile() {
	var array = [{ name: 'A', active: false }, { name: 'B', active: false }, { name: 'C', active: true }];

	const r1 = _.dropWhile(array, function(item) {
		return !item.active;
	});
	console.log(r1); //  [{ name: 'C', active: true }]

	const r2 = _.dropWhile(array, function(item) {
		return item.active;
	});
	console.log(r2); // [{ name: 'A', active: false }, { name: 'B', active: false }, { name: 'C', active: true }]
}
