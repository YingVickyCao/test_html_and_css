import _ from 'lodash';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

//after: n次后执行
// TODO: after
export function test_after() {
	var saves = ['profile', 'settings'];

	var done = _.after(1, function() {
		console.log('done saving!');
	});

	_.forEach(saves, function(type) {
		asyncSave({ type: type, complete: done });
	});

	// => Logs 'done saving!' after the two async saves have completed.
}

function asyncSave(parm) {
	console.log(JSON.stringify(parm));
}

// TODO:ary
export function test_ary() {
	var array = ['6', '8', '10', '100'];
	var r1 = _.map(array, _.ary(_.parseInt, 1));
	console.log(r1);
}
