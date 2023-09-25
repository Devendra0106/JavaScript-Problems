function counter(init) {
	let count = init;
	return {
		add: function (val) {
			count += val;
		},
		get: function () {
			return count;
		},
	};
}

let obj = counter(100);
obj.add(5);
obj.add(10);
console.log(obj.get());
