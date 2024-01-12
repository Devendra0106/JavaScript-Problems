//sliding window
function maxSubarraySum(arr, subArraylen) {
	let sum = 0,
		maxSum = 0;
	if (subArraylen > arr.length) return null;
	for (let i = 0; i < subArraylen; i++) {
		sum += arr[i];
	}
	maxSum = sum;
	for (let i = 0; i < arr.length - subArraylen; i++) {
		sum += arr[i + subArraylen] - arr[i];
		maxSum = Math.max(sum, maxSum);
	}
	return maxSum;
}

// let res = maxSubarraySum([100, 200, 300, 400], 2); // 700
let res = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// let res = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// let res = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
// let res = maxSubarraySum([2, 3], 3); // null
console.log("Res-->", res);
