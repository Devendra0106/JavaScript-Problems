function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

let res = insertionSort([5, 3, 4, 10, 1, 23, 8, 2]); //O(n^2)
console.log("Res-->", res);
//Time Complexity
//Best - O(n)
//Worst - O(n^2)
