// O(log(n)) time
// O(1) space

function binarySearch(array, target) {
  // Write your code here.
	let min = 0;
	let max = array.length - 1;
	let mid;
	while (min <= max) {
		mid = Math.floor ((min + max) / 2);
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] > target) {
			max = mid - 1;
		} else if (array[mid] < target) {
			min = mid + 1;
		}
	}
	return -1;
}

