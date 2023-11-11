function bubbleSort(arr) {
	let swapped;
	for (let i = 0; i < arr.length - 1; i++) {
		swapped = true;
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// let temp = arr[j];
				// arr[j] = arr[j + 1];
				// arr[j + 1] = temp;
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = false;
			}
		}
		if (swapped) break;
	}
	return arr;
}

let res = bubbleSort([5, 3, 4, 10, 1, 23, 8, 2]); //O(n^2)
// let res = bubbleSort([9, 1, 2, 3, 4, 5]); //O(n), only 9(element at 0th index) need to be bubbled out
console.log("Res-->", res);
