//sliding-window
function minSubArrayLen(arr, sum) {
	let start = 0,
		end = 0,
		total = 0,
		minLen = Infinity;
	while (start < arr.length) {
		//move window to right if current window total doesn't meet the given sum
		if (total < sum && end < arr.length) {
			total += arr[end];
			end++;
		}
		//shrink window from left if current window total exceeds the given sum
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= arr[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}
	return minLen === Infinity ? 0 : minLen;
}

// let res = minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
let res = minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
// let res = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
// let res = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
// let res = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
// let res = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
// let res = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
console.log("Res-->", res);
