// O(n) O(n)

function isPalindrome(string) {
  // Write your code here.
	let reversed = string.split('').reverse().join('');
	if (string === reversed) {
		return true
	}
	return false;
}

const isPalindrome = (string, i = 0) => {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}

// O(n) O(1)

const isPalindrome = (string) => {
  let first = 0;
  let last = string.length - 1;
  while (first < last) {
    if (string[first] !== string[last]) {
      return false;
    }
    first ++;
    last --;
  }
  return true;
}