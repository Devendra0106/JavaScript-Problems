// 0(n^2)
// function isSquareCheck(arr1, arr2) {
// 	for (let i = 0; i < arr1.length; i++) {
// 		let isSquare = false;
// 		for (let j = 0; j < arr2.length; j++) {
// 			if (arr1[i] * arr1[i] === arr2[j]) {
// 				isSquare = true;
// 				break;
// 			}
// 			if (j === arr2.length - 1) {
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }

//O(n)
function isSquareCheck(arr1, arr2) {
	let map1 = {},
		map2 = {};
	for (let key of arr1) {
		map1[key] = (map1[key] || 0) + 1;
	}
	console.log(map1);
	for (let key of arr2) {
		map2[key] = (map2[key] || 0) + 1;
	}
	console.log(map2);
	for (let key in map1) {
		if (!map2[key * key]) {
			return false;
		}
		if (map1[key] !== map2[key * key]) {
			return false;
		}
	}
	return true;
}

let res = isSquareCheck([1, 2, 2, 4], [1, 4, 4, 16]);
console.log(res);
