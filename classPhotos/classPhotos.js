function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	redShirtHeights.sort((a,b) => a - b)
	blueShirtHeights.sort((a,b) => a - b)
	let lesserCount = 0;
	let greaterCount = 0
	for (let i = 0; i < redShirtHeights.length; i++) {
		if (redShirtHeights[i] > blueShirtHeights[i]) {
			greaterCount++;
		} else if (redShirtHeights[i] === blueShirtHeights[i]) {
			return false;
		} else {
			lesserCount++;
		}
	}
	if (lesserCount === 0 || greaterCount === 0) {
		return true;
	}
  return false;
}

// O(nlog(n)) time | O(1) space - where n is the number of students

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);

	const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
	for (let idx = 0; idx < redShirtHeights.length; idx++) {
		const redShirtHeight = redShirtHeights[idx];
		const blueShirtHeight = blueShirtHeights[idx];
		if (shirtColorInFirstRow === 'RED') {
			if (redShirtHeight >= blueShirtHeight) return false;
		} else if (blueShirtHeight >= redShirtHeight) return false;
	}
  return true;
}
