

function minimumWaitingTime(queries) {
  // Write your code here.
	queries = queries.sort((a, b) => a - b);
	let sum = queries[0];
	let result = 0;
	// let last = queries[queries.length -1]
	for (let i = 1; i < queries.length; i ++) {
		result += sum;
		sum += queries[i];
	}
  return result ;
}

//  O (nllogn) time | O(1) space - where n is the number of queries
function minimumWaitingTime(queries) {
  // Write your code here.
	let totalWaitingTime = 0;
	queries.sort((a, b) => a - b)
	for (let i = 0; i < queries.length; i++) {
		let duration = queries[i];
		let remaining = queries.length - (i + 1);
		totalWaitingTime += duration * remaining;
	}
  return totalWaitingTime;
}