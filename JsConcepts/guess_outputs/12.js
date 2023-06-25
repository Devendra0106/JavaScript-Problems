let x = {
	m: 42,
	f: function () {
		let a = [1, 2, 3];
		let str = "";
		a.forEach(() => {
			str += this.m;
		});
		return str;
	},
};

console.log(x.f());
