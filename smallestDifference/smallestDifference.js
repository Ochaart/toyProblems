// O(n^2)
// O(1);

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	let smallest = Infinity;
	let difference;
	let result = [];
	for (const intOne of arrayOne) {
		for (const intTwo of arrayTwo) {
			if (intOne > intTwo) {
				difference = intOne - intTwo
				if (difference < smallest) {
					smallest = difference;
					result = [intOne, intTwo];
				}
			} else {
				difference = intTwo - intOne
				if (difference < smallest) {
					smallest = difference;
					result = [intOne, intTwo];
				}
			}
		}
	}
	return result;
}

// O(nlogn + mlogm)
// O(1;

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort((a,b) => a - b);
	arrayTwo.sort((a,b) => a - b);
	let smallest = Infinity;
	let current = Infinity;
	let leftIdx = 0;
	let rightIdx = 0;
	let pair = [];
	while (leftIdx < arrayOne.length && rightIdx < arrayTwo.length) {
		let leftInt = arrayOne[leftIdx];
		let rightInt = arrayTwo[rightIdx];
		if (leftInt < rightInt) {
			current = rightInt - leftInt;
			leftIdx++;
		} else if (rightInt < leftInt) {
			current = leftInt - rightInt;
			rightIdx++;
		} else {
			return [leftInt, rightInt];
		}
		if (smallest > current) {
			smallest = current;
			pair = [leftInt, rightInt];
		}
	}
	return pair;
}