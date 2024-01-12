// O(n^2)
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// O(n)
function sumZero(arr) {
	// array needs to be sorted.
	let l = 0,
		r = arr.length - 1;
	while (l < r) {
		let sum = arr[l] + arr[r];
		if (sum < 0) {
			l++;
		} else if (sum > 0) {
			r--;
		} else {
			return [arr[l], arr[r]];
		}
	}
}

let arr = [-5, -4, -3, -2, 0, 2, 5, 6, 8];
let res = sumZero(arr);
console.log("Res-->", res);
