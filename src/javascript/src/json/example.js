import * as json1 from './movies.json.js';
import json2 from './movies';

export function json() {
    _useJsonFormat();
    _useJSForFormat();
    convert_json_and_object();
}

function _useJsonFormat() {
    // style1: no tip
    let tmp = json1.default;
    console.log(tmp);
    console.log(tmp.title);
    console.log(tmp.movies.length);
    console.log(tmp.movies[0].title);

    // add item
    tmp['n1'] = 10;
    console.log('n1', tmp.n1);
    // tmp1['list'] = [10, 20, 30];
    tmp['list'] = [];
    tmp['list'].push(10);
    tmp['list'].push(20);
    tmp['list'].push(30);
    console.log('list', tmp.list);
}

function _useJSForFormat() {
    console.log('_useJSForFormat');
    // style2 : has auto tip
	let tmp = json2;
	console.log(tmp.title);
    console.log(tmp.movies.length);
    console.log(tmp.movies[0].title);

    // add item
    tmp.n1 = 10;
    console.log('n1', tmp.n1);
    // tmp1['list'] = [10, 20, 30];
    tmp.list = [];
    tmp.list.push(10);
    tmp.list.push(20);
    tmp.list.push(30);
    console.log('list', tmp.list);
}

function convert_json_and_object() {
	let obj = {};
	obj.arrays = [1, 2, 3];
    obj.name = 'name';

	const str = JSON.stringify(obj); // obj -> json string
    console.log('str:', str);	// str: {"arrays":[1,2,3],"name":"name"}

	const obj2 = JSON.parse(str); // json string -> obj
    console.log('obj2:', obj2);
}

