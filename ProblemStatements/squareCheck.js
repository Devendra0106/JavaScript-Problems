// 0(n^2)
function isSquareCheck(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		let isSquare = false;
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] * arr1[i] === arr2[j]) {
				isSquare = true;
				break;
			}
			if (j === arr2.length - 1) {
				return false;
			}
		}
	}
	return true;
}

isSquareCheck([1, 2, 5, 4], [1, 4, 9, 16]);
