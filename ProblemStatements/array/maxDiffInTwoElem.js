function maxDiffInTwoArrayElements(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (Math.abs(arr[i] - arr[j]) > max) {
				max = Math.abs(arr[i] - arr[j]);
			}
		}
	}
	return max;
}

let res = maxDiffInTwoArrayElements([3, 5, 1, 17, 9, 5, 2]);
console.log("Res-->", res);
