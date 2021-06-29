// O(n)
// O(1)

function findThreeLargestNumbers(array) {
  // Write your code here.
	let result = [];
	for (const int of array) {
		if (result.length < 3) {
			result.push(int);
		} else {
			result.sort((a,b) => a-b);
			for (let i = 0; i < result.length; i++) {
				if (int > result[i]) {
					result.splice(i, 1, int);
					break;
				}
			}
		}
	}
	return result.sort((a,b) => a-b);
}

function findThreeLargestNumbers(array) {
  // Write your code here.
	const threeLargest = [null, null, null];
	for (const num of array) {
		updateLargest(threeLargest, num)
	}
	return threeLargest;
}

function updateLargest(threeLargest, num) {
	if (threeLargest[2] === null || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2);
	} else if (threeLargest[1] === null || num > threeLargest[1]) {
		shiftAndUpdate(threeLargest, num, 1);
	} else if (threeLargest[0] === null || num > threeLargest[0]) {
		shiftAndUpdate(threeLargest, num, 0);
	}
}

function shiftAndUpdate(array, num, idx) {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) {
			array[i] = num;
		} else {
			array[i] = array[i + 1];
		}
	}
}