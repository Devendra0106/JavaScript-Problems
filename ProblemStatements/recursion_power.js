function power(n, m) {
	let res = 1;
	if (m === 0) return 1;
	res = n * power(n, m - 1);
	return res;
}

let res = power(2, 3);
console.log("Res-->", res);
