// O(n^2) O(n)

function caesarCipherEncryptor(string, key) {
  // Write your code here.
	const alphabet = {
		a: 0,
		b: 1,
		c: 2,
		d: 3,
		e: 4,
		f: 5,
		g: 6,
		h: 7,
		i: 8,
		j: 9,
		k: 10,
		l: 11,
		m: 12,
		n: 13,
		o: 14,
		p: 15,
		q: 16,
		r: 17,
		s: 18,
		t: 19,
		u: 20,
		v: 21,
		w: 22,
		x: 23,
		y: 24,
		z: 25
	}
	let result = [];
	let letters = Object.keys(alphabet);
	for (let char of string) {
		let current = alphabet[char];
		let final = current + key;
		while ( final > 25) {
			final = -1 + final - 25;
		}
		result.push(letters[final]);
	}
	return result.join('');
}

// O(n) O(n)

function caesarCipherEncryptor(string, key) {
  // Write your code here.
	const newLetters = [];
	const newKey = key % 26;
	for (const letter of string) {
		newLetters.push(getNewLetter(letter, newKey));
	}
	return newLetters.join('');
}

const getNewLetter = (letter, key) => {
	const newLetterCode = letter.charCodeAt() + key;
	return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}

// O(n) O(n);

function caesarCipherEncryptor(string, key) {
  // Write your code here.
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const newKey = key % 26;
	const newLetters = [];
	for (const letter of string) {
		newLetters.push(getNewLetter(letter, newKey, alphabet));
	}
	return newLetters.join('');
}

const getNewLetter = (letter, key, alphabet) => {
	const newLetterCode = alphabet.indexOf(letter) + key;
	return alphabet[newLetterCode % 26];
}
