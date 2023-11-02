function printFirstNfibonacci(n) {
	let fibArr = [];
	(fibArr[0] = 1), (fibArr[1] = 1);
	for (let i = 2; i <= n; i++) {
		fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
	}
	return fibArr;
}

let res = printFirstNfibonacci(10);
console.log("Res-->", res);
