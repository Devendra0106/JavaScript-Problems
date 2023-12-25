let sumUpToN = (n) => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

// let sumUpToN = (n) => {
// 	return (n * (n + 1)) / 2;
// };

let t1 = performance.now();
console.log(t1);
console.log(sumUpToN(100000));
let t2 = performance.now();
console.log(t2);
console.log("Time: ", (t2 - t1) / 1000);
