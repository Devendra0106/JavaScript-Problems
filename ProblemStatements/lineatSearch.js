function linearSearch(arr, key) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === key) {
			return i;
		}
	}
	return -1;
}

// let res = linearSearch([10, 15, 20, 25, 30], 15); // 1
// let res = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
// let res = linearSearch([100], 100); // 0
// let res = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
let res = linearSearch([100], 200); // -1
console.log("Res-->", res);

//Time Complexity
//Best - O(1)
//Avg - O(n)
//Worst - O(n)
