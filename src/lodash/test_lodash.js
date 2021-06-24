import _ from 'lodash';

import { test_chunk, test_compact, test_concat, test_difference, test_differenceBy, test_differenceWith, test_drop, test_dropRight, test_dropRightWhile, test_dropWhile } from './Test_Array';

import { test_after } from './test_Function';
import { test_chain } from './Test_Seq';
import { test_parseInt } from './Test_String';
import { test_now } from './Test_Date';
import { test_add, test_ceil, test_divide, test_floor, test_max, test_maxBy, test_mean, test_meanby, test_min, test_minBy, test_multiply, test_round, test_subtract, test_sum, test_sumBy } from './Test_Math';

import { test_clamp, test_inRange, test_random } from './Test_Number';
// var _ = require('lodash');

export const testLodash = key => {
	switch (key) {
		case 'isBoolean':
			test_isBoolean();
			break;

		case 'isArray':
			test_isArrray();
			break;

		case 'isString':
			test_isString();
			break;

		case 'isEmpty':
			test_isEmpty();
			break;

		case 'isObject':
			test_isObject();
			break;

		case 'isFunction':
			test_isFunction();
			break;
		case 'isNumber':
			test_isNumber();
			break;

		case 'equal':
			test_equal();
			break;

		case 'size':
			test_size();
			break;

		case 'delay':
			test_delay();
			break;

		// case 'test':
		//   alert("Hi , this is a alert");
		//   break;

		case 'map':
			test_map();
			break;

		case 'foreach':
			test_foreach();
			break;

		case 'reduce':
			test_reduce();
			break;

		case 'get':
			test_get();
			break;

		case 'head':
			test_head();
			break;

		case 'tail':
			test_tail();
			break;

		default:
			break;
	}
	_testCase_Array(key);
	_testCase_4_Seq(key);
	_testCase_4_math(key);
	_testCase_4_Number(key);
	_testCase_4_Date(key);
};

function _testCase_Array(key) {
	switch (key) {
		case 'chunk':
			test_chunk();
			break;

		case 'compact':
			test_compact();
			break;

		case 'concat':
			test_concat();
			break;

		case 'difference':
			test_difference();
			break;

		case 'differenceBy':
			test_differenceBy();
			break;

		case 'differenceWith':
			test_differenceWith();
			break;

		case 'dropRightWhile':
			test_dropRightWhile();
			break;

		case 'drop':
			test_drop();
			break;

		case 'dropRight':
			test_dropRight();
			break;

		case 'dropWhile':
			test_dropWhile();
			break;
	}
}
function _testCase_4_Seq(key) {
	switch (key) {
		case 'chain':
			test_chain();
			break;

		case 'after':
			test_after();
			break;
	}
}

function _testCase_4_String(key) {
	switch (key) {
		case 'parseInt':
			test_parseInt();
			break;
	}
}
function _testCase_4_math(key) {
	switch (key) {
		case 'add':
			test_add();
			break;

		case 'ceil':
			test_ceil();
			break;

		case 'divide':
			test_divide();
			break;

		case 'floor':
			test_floor();
			break;

		case 'max':
			test_max();
			break;

		case 'maxBy':
			test_maxBy();
			break;

		case 'mean':
			test_mean();
			break;

		case 'meanBy':
			test_meanby();
			break;

		case 'min':
			test_min();
			break;

		case 'minBy':
			test_minBy();
			break;

		case 'multiply':
			test_multiply();
			break;

		case 'round':
			test_round();
			break;

		case 'subtract':
			test_subtract();
			break;

		case 'sum':
			test_sum();
			break;

		case 'sumBy':
			test_sumBy();
			break;

		default:
			break;
	}
}

function _testCase_4_Number(key) {
	switch (key) {
		case 'clamp':
			test_clamp();
			break;

		case 'inRange':
			test_inRange();
			break;

		case 'random':
			test_random();
			break;
	}
}
function _testCase_4_Date(key) {
	switch (key) {
		case 'now':
			test_now();
			break;
	}
}

// TODO: "A" vs 'A'
function test_isBoolean() {
	console.log('false:', _.isBoolean(false)); // ture
	console.log(" 'A' :", _.isBoolean('A')); // false
	console.log('null:', _.isBoolean(null)); // false
	console.log('undefined:', _.isBoolean(undefined)); // false
}

function test_isArrray() {
	console.log('[1,2]', _.isArray([1, 2])); // true
	console.log('abc:', _.isArray('abc')); // false
	console.log('_:', _.isArray(_)); // false
}

function test_isString() {
	console.log(" 'abc' :", _.isString('abc')); // true
	console.log(' "abc" :', _.isString('abc')); // true
	console.log("new String('ABC'):", _.isString(new String('ABC'))); // false
	console.log('1:', _.isString(1));
}

function test_isEmpty() {
	console.log('true:', _.isEmpty(true)); // true
	console.log('false:', _.isEmpty(false)); // true
	console.log('1:', _.isEmpty(1)); // true

	console.log('null:', _.isEmpty(null)); // true

	console.log("'':", _.isEmpty('')); // true
	console.log('A:', _.isEmpty('A')); // false

	console.log('[]:', _.isEmpty([])); // true
	console.log('[1,2]:', _.isEmpty([1, 2])); // false

	console.log('{}:', _.isEmpty({})); // true
	console.log('{ a: 1 }:', _.isEmpty({ a: 1 })); // false
}

// 什么都是object？该方法没啥用途
function test_isObject() {
	// Object: e.g. arrays, functions, objects, regexes, new Number(0), and new String('')
	console.log('1:', _.isObject(1)); // false

	console.log('{}:', _.isObject({})); // true
	console.log('[1,2]:', _.isObject([1, 2])); // true
	console.log('_.noop:', _.isObject(_.noop)); // true
	console.log('_:', _.isObject(_)); // true
	console.log(" 'A':", _.isObject('A')); // true
	console.log("new String('B'):", _.isObject(new String('B'))); // true
	console.log('new Number(0):', _.isObject(new Number(0))); // true
}

function test_isFunction() {
	console.log(_.isFunction(_)); //true
	console.log(_.isFunction(/abc/)); // false
	console.log(_.isFunction('A')); // false
	console.log(_.isFunction('A'));
	console.log(_.isFunction(test_no_content)); // true
}

function test_no_content() {}

// To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method
function test_isNumber() {
	console.log('3:' + _.isNumber(3)); // true
	console.log('Infinity:' + _.isNumber(Infinity)); // true
	console.log('-Infinity:' + _.isNumber(-Infinity)); // true
	console.log("'3':" + _.isNumber('3')); // false
	console.log('"3":' + _.isNumber('3')); // false
	console.log('NaN:' + _.isNumber(NaN)); // true
	console.log('Number.MIN_VALUE:' + _.isNumber(Number.MIN_VALUE)); // true
}

function test_equal() {
	var obj1 = {
		a: 1
	};

	var obj2 = {
		a: 1
	};

	// _.isEqual：值比较
	console.log(_.isEqual(obj1, obj2)); // true
	console.log(obj1 == obj2); // false
	console.log(obj1 === obj2); // fasle
	console.log(_.isEqual(obj1, '1')); // fasle

	{
		/**
		 * ===:
		 * 若类型不同，不相等。
		 * 若类型相同 && 值相同，则相等。
		 * 若对象比较，指向同一个对象，则相等。
		 */
		console.log('===, start');

		console.log('1 === 1:' + (1 === 1));
		console.log("1 === '1':' " + (1 === '1'));
		console.log(" A' === 'A':" + ('A' === 'A'));
		console.log('true === true:' + 'true === true');
		console.log('undefined === undefine:' + (undefined === undefined));

		var obj1 = {
			a: 1
		};

		var obj2 = {
			a: 1
		};

		var obj3 = {
			a: 1
		};

		var obj4 = obj3;
		console.log('obj1 === obj2:' + (obj1 === obj2)); // fasle
		console.log('obj3 === obj4:' + (obj3 === obj4));
		console.log("'A' === 1:" + ('A' === 1));

		console.log('===, end');
	}

	/**
	 * ==
	 * 不同类型，先转成成同种类型（Number），然后按===比较。
	 * https://blog.csdn.net/wangyiyungw/article/details/82255223
	 */
	{
		console.log('==,start');
		console.log('1 == 1:' + (1 == 1));
		console.log("1 == '1':' " + (1 == '1'));
		console.log(" A' == 'A':" + ('A' == 'A'));
		console.log('true == true:' + 'true == true');
		console.log('undefined == undefine:' + (undefined == undefined));

		var obj1 = {
			a: 1
		};

		var obj2 = {
			a: 1
		};

		var obj3 = {
			a: 1
		};

		var obj4 = obj3;
		console.log('obj1 == obj2:' + (obj1 == obj2)); // fasle
		console.log('obj3 == obj4:' + (obj3 == obj4));
		console.log("'A' == 1:" + ('A' == 1));
		console.log('==,end');
	}
}

function test_size() {
	console.log(_.size([1, 2, 3])); // 3
	console.log(_.size({ a: 1, b: 2 })); // 2
	console.log(_.size('ABC')); // 3
}

function test_delay() {
	console.log('start log');
	_.delay(
		function(info) {
			console.log(info);
			console.log('end log');
		},
		2000,
		'later 2 s'
	);
}

function test_map() {
	var arr = [1, 2, 3];
	console.log(arr);
	var a = _.map(arr, item => {
		/*
    1, 1
    2, 4
    3, 9
    */
		var result = item * item;
		console.log('item:', item, 'result:', result);
		return result;
	});
	console.log(a); // [1,4,9]
}

// 遍历
function test_foreach() {
	test_foreach_4_array();
	test_foreach_4_obj();
}

function test_foreach_4_array() {
	var arr = [1, 2];
	var sum = null;
	var result = _.forEach(arr, function(value) {
		/*
    1, 1 
    2, 3
    */
		sum += value;
		console.log(value, sum);
	});
	console.log('arr:', JSON.stringify(arr)); // [1,2]
	console.log('result:', JSON.stringify(result)); // [1,2]
	console.log('sum:', sum); // 3
}

function test_foreach_4_obj() {
	var obj = { a: 1, b: 2 };
	var sum = null;
	var result = _.forEach(obj, function(value, key) {
		/**
		 * 1,a,1
		 * 2,b,3
		 */
		sum += value;
		console.log(value + ',' + key + ',' + sum);
	});
	console.log('arr:', JSON.stringify(obj)); //  { a: 1, b: 2 }
	console.log('result:', JSON.stringify(result)); //  { a: 1, b: 2 }
	console.log('sum:', sum); // 3
}

function test_reduce() {
	test_reduce_4_array();
	test_reduce_4_fields_map();
}

function test_reduce_4_array() {
	console.log('reduce 4 array, start ------------------------------>');

	var collection = [{ n1: 1, n2: 9 }, { n1: 2, n2: 8 }, { n1: 3, n2: 7 }];

	var memo = [];
	var result = _.reduce(
		collection,
		(memo, item, index) => {
			memo.push(item.n1 + item.n2);
			console.log('item=' + JSON.stringify(item) + ',memo=' + memo);
			return memo;
			// item={"n1":1,"n2":9},memo=10
			// item={"n1":2,"n2":8},memo=10,10
			// item={"n1":3,"n2":7},memo=10,10,10
		},
		memo
	);
	console.log('result=' + result); // result=10,10,10
	console.log('memo=' + memo); // memo=10,10,10

	console.log('reduce 4 array, end <------------------------------');
}

function test_reduce_4_fields_map() {
	console.log('reduce 4 field map, start ------------------------------>');

	var obj2 = {
		n1: '10',
		n2: '20',
		n3: '30'
	};

	var memo = [];
	var result = _.chain(obj2)
		.reduce((memo, value, key) => {
			console.log('key=' + key + ',value=' + value, memo);
			return memo;
		}, {})
		.value();
	console.log('result=', result); // {n1: "10", n2: "20"}
	console.log('reduce 4 field map, end <------------------------------');
}

function test_get() {
	var object = { a: [{ b: { c: 3 } }] };
	//  FIXED_ERROR:Uncaught TypeError: _.remove is not a function.
	// https://stackoverflow.com/questions/56299044/lodash-uncaught-typeerror-remove-is-not-a-function
	console.log(_.get(object, 'a[0].b.c')); // => 3
	console.log(_.get(object, ['a', '0', 'b', 'c'])); // => 3
	console.log(_.get(object, 'a.b.c', 'default')); // => 'default'

	var object2 = {
		a: {
			b: {
				c: 3
			}
		}
	};
	console.log(_.get(object2, 'a.b', '')); // {c:3}
	console.log(_.get(object2, 'a.b.c', '')); // 3
}

function test_head() {
	console.log(_.head([1, 2, 3]));
	console.log(_.head([]));

	var users = [{ user: 'A', score: 10 }, { user: 'B', score: 100 }, { user: 'C', score: 90 }];
	var first = _.head(users);
	console.log('first=' + JSON.stringify(first));

	var last = _.tail(users);
	console.log('last=' + JSON.stringify(last));
}

function test_tail() {
	console.log(_.tail([1, 2, 3])); // [2, 3]
	console.log(_.tail([])); // []

	var users = [{ user: 'A', score: 10 }, { user: 'B', score: 100 }, { user: 'C', score: 90 }];

	var tail = _.tail(users);
	console.log('tail=' + JSON.stringify(tail)); // [{"user":"B","score":100},{"user":"C","score":90}]
}
