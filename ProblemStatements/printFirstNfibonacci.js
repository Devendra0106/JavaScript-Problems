// function printFirstNfibonacci(n) {
// 	let fibArr = [];
// 	(fibArr[0] = 0), (fibArr[1] = 1);
// 	for (let i = 2; i <= n; i++) {
// 		fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
// 	}
// 	return fibArr;
// }

function printFirstNfibonacci(n) {
	let a = 0,
		b = 1;
	for (let i = 1; i <= n; i++) {
		console.log(a);
		let next = a + b;
		a = b;
		b = next;
	}
}

let res = printFirstNfibonacci(10);
console.log("Res-->", res);
