function binarySearch(arr, num) {
	let min = 0,
		max = arr.length - 1;
	while (min <= max) {
		let midIndex = Math.floor((min + max) / 2);
		if (arr[midIndex] < num) {
			min = midIndex + 1;
		} else if (arr[midIndex] > num) {
			max = midIndex - 1;
		} else {
			return midIndex;
		}
	}
	return -1;
}

// let res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8);
let res = binarySearch(
	[
		5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
		99,
	],
	100
); // -1
console.log("Res-->", res);
//Time Complexity
//Best - O(1)
//Avg - O(log n)
//Worst - O(log n)
