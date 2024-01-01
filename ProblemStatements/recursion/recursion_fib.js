function fib(num) {
	if (num === 0) return 0;
	if (num === 1) return 1;
	return fib(num - 1) + fib(num - 2);
}

//or
// function fib(n) {
// 	if (n <= 2) return 1;
// 	return fib(n - 1) + fib(n - 2);
// }

let res = fib(10);
console.log("Res-->", res);
