import _ from 'lodash';

export function convertEachItem(rawItem, mappingJson, execFunctionJson, pageCode) {
	function addCodeInfo(newItem) {
		newItem['pageCode'] = pageCode;
		return newItem;
	}

	function getFunction(v) {
		return isFuncDesc(v) && execFunctionJson && execFunctionJson[getFuncName(v)];
	}

	function getValue(f, k) {
		if (_.isFunction(f)) {
			return f.call(f, rawItem);
		}
		return _.get(rawItem, k, '');
	}

	function mapJson(mappingJson, item) {
		if (_.isFunction(mappingJson)) {
			return mappingJson(item);
		}
		return mappingJson;
	}

	var result = _.chain(mapJson(mappingJson, rawItem))
		.reduce((memo, v, k) => {
			var isFunction = getFunction(v);
			memo[k] = getValue(isFunction, v);
			// console.log("memo:", memo);
			return memo;
		}, {})
		// .execute(addCodeInfo)
		.value();
	addCodeInfo(result);
	// console.log("result:", result);
	return result;
}
export function convertCommonScore(rawScoreItems, mappingJson, execFunctionJson, pageCode, dataJson) {
	// console.log("rawScoreItems", rawScoreItems);
	//  assign
	var result = _.chain(rawScoreItems)
		.map(function(item) {
			// console.log("score item:", item);
			// return getItem();
			var tmpItem = convertEachItem(item, mappingJson, execFunctionJson, pageCode);
			// console.log("item:", item, "tmpItem:", tmpItem);
			return tmpItem;
		})
		.value();
	// console.log("result:", result);
	return result;
}

function getItem() {
	return { A: 'A', b: 100 };
}
function getFuncName(f) {
	return f.substring(5);
}

function isFuncDesc(str) {
	return str.indexOf('FUNC:') > -1;
}
