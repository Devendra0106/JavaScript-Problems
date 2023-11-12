function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			// let temp = arr[i];
			// arr[i] = arr[minIndex];
			// arr[minIndex] = temp;
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
	return arr;
}

let res = selectionSort([5, 3, 4, 10, 1, 23, 8, 2]); //O(n^2)
console.log("Res-->", res);
