

function generateDocument(characters, document) {
  // Write your code here.
	if (characters.length < document.length) return false;
	characters = characters.split('');
	for (const char of document) {
		let idx = characters.indexOf(char);
		if (idx === -1) {
			return false;
		} else {
			characters.splice(idx,1);
		}
	}
  return true;
}
// (m * (n + m))
// o(c)

function generateDocument(characters, document) {
  // Write your code here.
	for (const char of document) {
		const docFrequency = countCharFrequency(char, document);
		const charFrequency = countCharFrequency(char, characters);
		if (docFrequency > charFrequency) return false;
	}
  return true;
}

const countCharFrequency = (char, target) => {
	let frequency = 0;
	for (const character of target) {
		if (char === character) frequency ++;
	}
	return frequency;
}

// O(m+n)
// O(c)

function generateDocument(characters, document) {
  // Write your code here.
	const characterCounts = {};
	for (const char of characters) {
		if (!(char in characterCounts)) characterCounts[char] = 0;
		characterCounts[char] ++;
	}

	for (const char of document) {
		if (!(char in characterCounts) || characterCounts[char] === 0) return false;
		characterCounts[char] --;
	}
  return true;
}
