// JS 的数据类型：primitive，object
export function test_json_vs_object() {
	var obj = {};
	obj.arrays = [1, 2, 3];
	obj.name = 'name';

	var str = JSON.stringify(obj); // obj -> json string
	console.log('str:', str);

	var obj2 = JSON.parse(str); // json string -> obj
	console.log('obj2:', obj2);
}
