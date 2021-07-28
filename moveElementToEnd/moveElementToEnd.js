// O(n)
// O(1)

function moveElementToEnd(array, toMove) {
  // Write your code here.
	array.sort((a,b) => a - b);
	let start = array.indexOf(toMove);
	let counter = 0;
	for (let i = start; i < array.length; i++) {
		if (array[i] === toMove) {
			counter ++;
		}
	}
	array.push(...array.splice(start, counter));
	return array;
}

// O(n^2)
// O(1);

function moveElementToEnd(array, toMove) {
  // Write your code here.
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] === toMove) {
			array.push(...array.splice(i,1));
		}
	}
	return array;
}

// O(n);
// O(1);

function moveElementToEnd(array, toMove) {
  // Write your code here.
	let leftIdx = 0;
	let rightIdx = array.length - 1;
	while (leftIdx < rightIdx) {
		while (leftIdx < rightIdx && array[rightIdx] === toMove) {
			rightIdx --;
		}
		if (array[leftIdx] === toMove) swap(leftIdx, rightIdx, array);
		leftIdx ++;
	}
	return array;
}

const swap = (left, right, array) => {
	const temp = array[left];
	array[left] = array[right];
	array[right] = temp;
}

