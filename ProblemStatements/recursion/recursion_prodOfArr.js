function prodOfArr(arr) {
	if (arr.length === 0) return 1;
	return arr[0] * prodOfArr(arr.slice(1));
}
//1 * [2, 3, 4]
//        2 * [3,4]
//            3 * [4]
//                4 * []
//                    1
let res = prodOfArr([1, 2, 3, 4]);
console.log("Res-->", res);
