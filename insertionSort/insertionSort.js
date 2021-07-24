// Best O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
//  Worst: O(n^2) time | O(1) space


function insertionSort(array) {
  // Write your code here.
	for (let i = 1; i < array.length; i++) {
		let current = i;
		let previous = i - 1;
		while (previous >= 0 && array[current] < array[previous] ) {
			swap(current, previous, array);
			current--;
			previous--;
		}
	}
	return array
}

const swap = (current, previous, array) => {
	let temp = array[current];
	array[current] = array[previous];
	array[previous] = temp;
}