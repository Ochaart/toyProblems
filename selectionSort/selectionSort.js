// best-worst O(n^2) | O(1) space

function selectionSort(array) {
  // Write your code here.
	let current = 0;
	while (current !== array.length - 1) {
		let smallest = current;
		for (let i = current + 1; i < array.length; i++) {
			if (array[i] < array[smallest]) {
				smallest = i;
			}
		}
		swap(current, smallest, array);
		current++;
	}
	return array;
}

const swap = (current, smallest, array) => {
	let temp = array[current];
	array[current] = array[smallest];
	array[smallest] = temp;
}