// O(n) O(n)

function runLengthEncoding(string) {
  // Write your code here.
	const dataEncoded = [];
	let counter = 1;
	for (let i = 1; i < string.length; i++) {
		if (counter < 9 && string[i] === string[i-1]) {
			counter++;
		} else {
			dataEncoded.push(counter, string[i - 1])
			counter = 1;
		}
	}
	dataEncoded.push(counter, string[string.length - 1])
	return dataEncoded.join('');
}

function runLengthEncoding(string) {
  // Write your code here.
	const dataEncoded = [];
	for (let i = 0; i < string.length; i++) {
		let counter = 1;
		while (counter < 9 && string[i+1] && string[i] === string[i+1]) {
			counter++;
			i++;
		}
		dataEncoded.push(counter, string[i])
	}
	return dataEncoded.join('');
}
