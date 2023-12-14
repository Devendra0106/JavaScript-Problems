//Iterative
// function factorial(n) {
// 	let total = 1;
// 	for (let i = 1; i <= n; i++) {
// 		total *= i;
// 	}
// 	return total;
// }

//Recursive
function factorial(n) {
	if (n < 0) return 0;
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}

let res = factorial(7);
console.log("Res-->", res);
