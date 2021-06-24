/*
map vs forEach
map:
1) this = Window
2) 有返回值
3) 传递item + index + array

forEach：
1）没有返回值
3) 传递item
*/
export function test_map() {
	var origin = [1, 2, 3];
	// var copy = origin.slice(0);  // copy list
	// console.log(copy === origin); // false

	var copy = [];
	copy = origin.map(function(item, index, arr) {
		console.log('arr  === origin:', arr === origin); // true
		/**
        item=1,index=0,arr=[1,2,3],copy=[],tmp=1
        item=2,index=1,arr=[1,2,3],copy=[],tmp=4
        item=3,index=2,arr=[1,2,3],copy=[],tmp=9
         */
		var tmp = item * item;
		console.log('item=' + item + ',index=' + index + ',arr=' + JSON.stringify(arr) + ',copy=' + JSON.stringify(copy) + ',tmp=' + tmp);
		return tmp;
	});
	console.log(copy); // [1, 4, 9]
	console.log(origin); // [1, 2, 3]
	return copy;
}
export function test_foreach() {
	var origin = [1, 2, 3];
	var copy = [];

	origin.forEach(function(item) {
		copy.push(item * item);
		/**
        item=1,copy=[1], origin:  [1, 2, 3]
        item=2,copy=[1,4], origin: [1, 2, 3]
        item=3,copy=[1,4,9], origin: [1, 2, 3]
         */
		console.log('item=' + item + ',copy=', JSON.stringify(copy), ',origin:', JSON.stringify(origin));
	});
	console.log(copy); // [1, 4, 9]
	console.log(origin); // [1, 2, 3]
	return copy;
}
