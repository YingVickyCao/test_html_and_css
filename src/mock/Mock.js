import _ from 'lodash';
import { convert } from './mathDataConverter';
import { fields_map } from './parser';

export function mock(key) {
	switch (key) {
		case 'convert':
			mock_convert();
			break;

		case 'fields_map':
			mock_fields_map();
			break;
	}
}

function mock_convert() {
	var dataJson = {
		pageCode: 'math_page',
		items: [{ id: 1, url: 'Item_1' }, { id: 3, url: 'Item_2' }, { id: 5, url: 'Item_3' }]
	};
	var itemsJson = [{ id: 1, url: 'Item_1' }, { id: 3, url: 'Item_2' }, { id: 5, url: 'Item_3' }];

	console.log(itemsJson);
	var result = convert(itemsJson, dataJson.pageCode, dataJson);
	console.log(result);
}

function mock_fields_map() {
	fields_map();
}
