import _ from 'lodash';

export function test_parseInt() {
	var r1 = _.parseInt('08');
	console.log(r1);

	var r2 = _.map(['06', '0', 80], _.parseInt);
	console.log(r2); // [6, 0, 80]
}
