// O(nlogn) | O(1)

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
	let totalSpeed = 0;
	if (fastest) {
		 redShirtSpeeds.sort((a, b) => a - b)
		 blueShirtSpeeds.sort((a, b) => b - a)
	} else {
		redShirtSpeeds.sort((a, b) => a - b)
		blueShirtSpeeds.sort((a, b) => a - b)
	}

	for (let i = 0; i < redShirtSpeeds.length; i++) {
		redShirtSpeeds[i] > blueShirtSpeeds[i] ? totalSpeed += redShirtSpeeds[i] : totalSpeed += blueShirtSpeeds[i];
	}
  return totalSpeed;
}