let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myForEach = function (func) {
	for (let i = 0; i < this.length; i++) {
		func(this[i]);
	}
};

arr.myForEach(function (el) {
	console.log(el * 10);
});
