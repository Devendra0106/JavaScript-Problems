//O(n^2)
function checkSquares(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (const num of arr1) {
		let indexOfSquareNum = arr2.indexOf(num ** 2);
		if (indexOfSquareNum === -1) {
			return false;
		}
		arr2.splice(indexOfSquareNum, 1);
	}
	return true;
}

let res = checkSquares([2, 4, 1, 3], [1, 11, 16, 4]);
console.log(res);
