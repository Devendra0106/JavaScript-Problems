//.reduce ==> HOF executes reducer function on each element of the array resulting in single value.

// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(res);

Array.prototype.myReduce = function (callback, initVal) {
	let accumulator = initVal;
	for (let i = 0; i < this.length; i++) {
		if (accumulator !== undefined) accumulator = callback(accumulator, this[i]);
		else accumulator = this[i];
	}
	return accumulator;
};

let arr = [1, 2, 3, 4, 5, 6];
let res = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(res);
