import _ from 'lodash';

// TODO: clamp
export function test_clamp() {
	const r1 = _.clamp(-10, 8, 2);
	console.log(r1); // 8

	const r2 = _.clamp(0, 10, 5);
	console.log(r2); // 10

	const r3 = _.clamp([5, 10, 5]);
	console.log(r3); // NaN
}

// start<= num < end
export function test_inRange() {
	const r1 = _.inRange(2, 2, 4);
	console.log(r1); // true

	const r2 = _.inRange(3, 2, 3);
	console.log(r2); // false

	const r3 = _.inRange(3, 2, 4);
	console.log(r3); // true

	const r4 = _.inRange(4, 5); //_.inRange(4, 0, 5)
	console.log(r4); // true

	const r5 = _.inRange(2, 2);
	console.log(r5); // false

	const r6 = _.inRange(5.2, 4);
	console.log(r6); //false

	const r7 = _.inRange(5.2, 4, 5);
	console.log(r7); //false
}

export function test_random() {
	console.log(_.random(0, 5)); // int [0,5]
	console.log(_.random(5)); // int [0,5]
	console.log(_.random(5, true)); // 0.6984089509320801, float [0,5]
	console.log(_.random(1.2, 5.2)); // 1.9669580184064717, float[1.2, 5.0]
}
