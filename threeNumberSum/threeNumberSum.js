// O(n^3);
// O(n);

function threeNumberSum(array, targetSum) {
  // Write your code here.
	const result = [];
	array.sort();
	for (let i = 0; i < array.length; i++) {
		for (let j = i+1; j < array.length; j++) {
			for (let k = j+1; k < array.length; k++) {
				if ((array[i] + array[j] + array[k]) === targetSum) {
					result.push([array[i], array[j], array[k]].sort((a,b) => a - b));
				}
			}
		}
	}
	return result.sort((a,b) => a[0] - b[0]);
}

// O(n^2)
// O(n);

function threeNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a,b) => a - b);
	const triplets = [];
	for (let i = 0; i < array.length; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while (left < right) {
			const currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum) {
				triplets.push([array[i], array[left], array[right]]);
				left ++;
				right --;
			} else if (currentSum < targetSum) {
				left ++;
			} else if (currentSum > targetSum) {
				right --;
			}
		}
	}
	return triplets;
}
