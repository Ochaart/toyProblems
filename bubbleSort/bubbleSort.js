// Best: O(n) | O(1)
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function bubbleSort(array) {
  // Write your code here.
	let isSorted = false;
	let counter = 0;
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i+1]) {
				swap(i, i+1, array);
				isSorted = false;

			}
		}
		counter++
	}
	return array;
}

const swap = (current, next, array) => {
	let temp = array[next];
	array[next] = array[current];
	array[current] = temp;
}