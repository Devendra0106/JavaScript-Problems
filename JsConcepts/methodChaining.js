const calc = {
	total: 0,
	add(n) {
		this.total += n;
		return this;
	},
	multiply(n) {
		this.total *= n;
		return this;
	},
	subtract(n) {
		this.total -= n;
		return this;
	},
};

const res = calc.add(10).multiply(5).subtract(30).add(10);
console.log("Res-->", res.total);
