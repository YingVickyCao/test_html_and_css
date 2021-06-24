import _ from 'lodash';

export function test_chain() {
	// minBy,sortBy,map,head,tail
	var users = [{ user: 'A', score: 100 }, { user: 'B', score: 20 }, { user: 'C', score: 90 }];
	var first = _.chain(users)
		.sortBy('score') // B C A
		.map(function(item) {
			console.log(item.user + "'s score is " + item.score);
			return item;
		})
		.head()
		.value();
	console.log('first=' + JSON.stringify(first)); // {"user":"B","score":20}

	const sortByScore = score => {
		return score * 100;
	};
	var min = _.chain(users)
		// .sortBy('score')
		// .sortBy(function sortByScore(score) {
		//   return score * 100;
		// })
		// .sortBy(score => {
		//   return score * 100;
		// })
		.sortBy(sortByScore)
		.minBy('score');
	console.log('min=' + JSON.stringify(min)); // {"user":"B","score":20}

	var tail = _.chain(users)
		.sortBy('score')
		.map(function(item) {
			console.log(item.user + "'s score is " + item.score);
			return item.user + "'s score is " + item.score;
		})
		.tail()
		.value();

	console.log('tail=' + tail); // C's score is 90,A's score is 100
}
