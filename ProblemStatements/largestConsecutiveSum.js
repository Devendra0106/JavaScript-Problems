//O(n)      --> Best case
//O(n^2)    --> Worst case
// function largestSum(arr, num) {
// 	let max = 0,
// 		temp = 0;
// 	for (let i = 0; i <= arr.length - num; i++) {
// 		temp = 0;
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[i + j];
// 		}
// 		if (max < temp) {
// 			max = temp;
// 		}
// 	}
// 	return max;
// }

//O(n)
function largestSum(arr, num) {
	if (num > arr.length) return null;
	let maxSum = -Infinity,
		tempSum = 0;

	for (let j = 0; j < num; j++) {
		tempSum += arr[j];
	}
	maxSum = tempSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

const largeSum = largestSum([1, 2, 3, 4, 6, 7, 8, 4, 3, 5], 4);
console.log("Res-->", largeSum);
