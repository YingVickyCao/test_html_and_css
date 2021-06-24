import _ from 'lodash';

export function test_add() {
	var r1 = _.add(1, 9);
	console.log(r1); // 10
}

// round up
export function test_ceil() {
	const r1 = _.ceil(4.004);
	console.log(r1); // 5

	const r2 = _.ceil(4.004, 2);
	console.log(r2); // 4.01

	const r3 = _.ceil(6040.004, -2);
	console.log(r3); // 6100
}

export function test_divide() {
	const r1 = _.divide(6, 4);
	console.log(r1); // 1.5
}

// round down
export function test_floor() {
	const r1 = _.floor(4.0006); // 4
	console.log(r1);

	const r2 = _.floor(4.006, 2); // 4
	console.log(r2);

	const r3 = _.floor(0.046, 2); // 0.04
	console.log(r3);

	const r4 = _.floor(4060, -2);
	console.log(r4); // 4000
}

export function test_max() {
	const r1 = _.max([4, 0, 8]); // 8
	console.log(r1);

	const r2 = _.max([]); // undefined
	console.log(r2);

	const r3 = _.max(null); // undefined
	console.log(r3);
}

export function test_maxBy() {
	var array = [{ n: 1 }, { n: 2 }];
	const r1 = _.maxBy(array, function(item) {
		return item.n;
	});
	console.log(r1); // [{ n: 2 }]
	const r2 = _.maxBy(array, 'n');
	console.log(r2); // [{ n: 2 }] , shorthand

	var array2 = [{ n: 1, m: 1 }, { n: 2, m: 2 }];
	const r3 = _.maxBy(array2, 'n');
	console.log(r3); // [{ n: 2, m: 2 }]
}
export function test_mean() {
	console.log(_.mean([4, 6, 8, 2])); // 5
}

export function test_meanby() {
	const array = [{ n: 2 }, { n: 8 }, { n: 4 }, { n: 6 }];
	const r1 = _.meanBy(array, function(item) {
		return item.n;
	});
	console.log(r1); // 5

	const r2 = _.meanBy(array, 'n'); // 5
	console.log(r2);

	const array2 = [{ n: 2, m: 5 }, { n: 8, m: 2 }, { n: 4 }, { n: 6 }];
	const r3 = _.meanBy(array2, 'n'); // 5
	console.log(r3);
}
export function test_min() {
	const r1 = _.min([4, 0, 8]); // 0
	console.log(r1);

	const r2 = _.min([]); // undefined
	console.log(r2);

	const r3 = _.min(null); // undefined
	console.log(r3);
}

export function test_minBy() {
	var array = [{ n: 1 }, { n: 2 }];
	const r1 = _.minBy(array, function(item) {
		return item.n;
	});
	console.log(r1); // [{ n: 1 }]
	const r2 = _.minBy(array, 'n');
	console.log(r2); // [{ n: 1 }] , shorthand

	var array2 = [{ n: 1, m: 1 }, { n: 2, m: 2 }];
	const r3 = _.minBy(array2, 'n');
	console.log(r3); // [{ n: 1, m: 1 }]
}

export function test_multiply() {
	const r1 = _.multiply(5, 2);
	console.log(r1); // 10
}

export function test_round() {
	const r1 = _.round(4.006);
	console.log(r1); // 4

	const r2 = _.round(4.006, 2);
	console.log(r2); // 4.01

	const r3 = _.round(4060, -2);
	console.log(r3); // 4100
}

export function test_subtract() {
	const r1 = _.subtract(6, 4);
	console.log(r1); // 2
}

export function test_sum() {
	const r1 = _.sum([2, 8, 4, 6]);
	console.log(r1); // 20
}

export function test_sumBy() {
	const r1 = _.sumBy([{ n: 2 }, { n: 8 }, { n: 4 }, { n: 6, m: 5 }], function(item) {
		return item.n;
	});
	console.log(r1); // 20

	const r2 = _.sumBy([{ n: 2 }, { n: 8 }, { n: 4 }, { n: 6, m: 5 }], 'n');
	console.log(r2); // 20
}
