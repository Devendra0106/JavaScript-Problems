//O(n^2)
// function checkSquares(arr1, arr2) {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}
// 	for (const num of arr1) {
// 		let indexOfSquareNum = arr2.indexOf(num ** 2);
// 		if (indexOfSquareNum === -1) {
// 			return false;
// 		}
// 		arr2.splice(indexOfSquareNum, 1);
// 	}
// 	return true;
// }

//O(n)
function checkSquares(arr1, arr2) {
	let numbersMap = {};
	let squaresMap = {};
	for (const num of arr1) {
		numbersMap[num] = (numbersMap[num] || 0) + 1;
	}

	for (const sqr of arr2) {
		squaresMap[sqr] = (squaresMap[sqr] || 0) + 1;
	}
	//Returns false when square is not there in 2nd arr.
	for (const num in numbersMap) {
		if (!squaresMap[num ** 2]) {
			return false;
		}
	}

	//Returns false when count of squares doesn't match.
	for (const num in numbersMap) {
		if (numbersMap[num] !== squaresMap[num ** 2]) {
			return false;
		}
	}

	return true;
}

let res = checkSquares([2, 1, 3, 2], [1, 4, 4, 9]);
console.log(res);
