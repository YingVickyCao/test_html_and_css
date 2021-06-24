import _ from 'lodash';

export function fields_map() {
	var FIELDS_FILTER_AND_MAPPING = {
		n1: 'n_1',
		n2: 'n_2'
	};

	var obj2 = {
		n_1: '10',
		n_2: '20',
		n_3: '30'
	};

	var result = _.chain(FIELDS_FILTER_AND_MAPPING)
		.reduce((memo, value, key) => {
			memo[key] = obj2[value];
			// {n1: "10"}
			// {n1: "10", n2: "20"}
			console.log(memo);
			return memo;
		}, {})
		.value();
	console.log('result=', result); // {n1: "10", n2: "20"}
}
