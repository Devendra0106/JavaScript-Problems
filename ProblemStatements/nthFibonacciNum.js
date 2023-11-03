function nthfibonacciNum(n) {
	let a = 0,
		b = 1;
	for (let i = 1; i < n; i++) {
		let next = a + b;
		a = b;
		b = next;
	}
	return a;
}

let res = nthfibonacciNum(7);
console.log("Res-->", res);
