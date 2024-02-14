function myMemoise(fn, context) {
	let res = {};
	return function (...args) {
		var argsCache = JSON.stringify(args);
		if (!res[argsCache]) {
			res[argsCache] = fn.call(context || this, ...args);
		}
		return res[argsCache];
	};
}

const clumsyProduct = (num1, num2) => {
	for (let index = 0; index < 1000000000; index++) {}
	return num1 * num2;
};

const memoiseClumsyProduct = myMemoise(clumsyProduct);

console.time("First call");
console.log(memoiseClumsyProduct(1234, 4321));
console.timeEnd("First call");

console.time("Second call");
console.log(memoiseClumsyProduct(1234, 4321));
console.timeEnd("Second call");
