function findOdd(arr) {
	let res = [];

	function helperRecursion(inputArray) {
		if (inputArray.length === 0) {
			return;
		}
		if (inputArray[0] % 2 !== 0) {
			res.push(inputArray[0]);
		}
		//Pass arr excluding first element from it
		helperRecursion(inputArray.slice(1));
	}

	helperRecursion(arr);
	return res;
}

let result = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result); //[ 1, 3, 5, 7, 9 ]
