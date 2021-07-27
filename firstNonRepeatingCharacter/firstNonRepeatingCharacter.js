// O(n+m);
// O(1);

function firstNonRepeatingCharacter(string) {
  // Write your code here.
	const characterCount = {};
	for (let i = 0; i < string.length; i++) {
		if (!(string[i] in characterCount)) characterCount[string[i]] = { idx: i, count: 0};
		characterCount[string[i]].count ++;
	}
	let idx = Infinity;
	for (const char in characterCount) {
		if (characterCount[char].count === 1) {
			if (characterCount[char].idx < idx) idx = characterCount[char].idx;
		}
	}
	return idx === Infinity ? -1 : idx;
}

// O(n)
// O(1)

function firstNonRepeatingCharacter(string) {
  // Write your code here.
	const characterCount = {};

	for (const char of string) {
		if (!(char in characterCount)) characterCount[char] = 0;
		characterCount[char] ++;
	}

	for (let i = 0; i < string.length; i++) {
		const character = string[i];
		if (characterCount[character] === 1) return i;
	}
  return -1;
}