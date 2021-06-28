// O(n)
// O(d) d = depth

function productSum(array, depth = 2) {
  // Write your code here.
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (!Array.isArray(array[i])) {
			sum += array[i];
		} else {
			sum += depth * productSum(array[i], depth + 1);
		}
	}
	return sum;
}
