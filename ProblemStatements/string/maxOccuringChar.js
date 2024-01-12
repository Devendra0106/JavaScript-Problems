function findFrequentlyOccuringChar(input) {
	let map = {};
	input.split("").forEach((char) => {
		map[char] = map[char] ? map[char] + 1 : 1;
	});
	let max = 0,
		maxOccChar;
	for (let k in map) {
		if (max < map[k]) {
			max = map[k];
			maxOccChar = k;
		}
	}
	return maxOccChar;
}

const res = findFrequentlyOccuringChar("Hello World");
console.log(res);
