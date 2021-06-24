import { convertCommonScore } from './baseConverter';

const map = {
	itemUrl: 'url',
	itemId: 'FUNC:gegerateId'
};

const execFunctionJson = {
	gegerateId: json => {
		return 'math_' + json.id;
	}
};

export const convert = (itemsJson, pageCode, dataJson) => {
	const result = convertCommonScore(itemsJson, map, execFunctionJson, pageCode, dataJson);
	return result;
};
