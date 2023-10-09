//.filter --> HOF created new array with all elements passing the test condition implemented by provided function.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter((n) => n % 2 === 0);
// console.log(res);

Array.prototype.myFilter = function (callback) {
	let resArr = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) resArr.push(this[i]);
	}
	return resArr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
let res = arr.myFilter((n) => n % 2 === 0);
console.log(res);
