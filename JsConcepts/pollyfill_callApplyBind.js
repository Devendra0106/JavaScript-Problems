let p1 = {
	fName: "John",
	lName: "Doe",
	getUser: function (age) {
		return `I'm ${this.fName} ${this.lName}, ${age} year's old!`;
	},
};

let p2 = {
	fName: "Sam",
	lName: "Doe",
};

Function.prototype.myCall = function (obj, ...args) {
	obj.Fn = this;
	return obj.Fn(...args);
};

Function.prototype.myApply = function (obj, args) {
	obj.Fn = this;
	return obj.Fn(...args);
};

Function.prototype.myBind = function (obj, ...args) {
	obj.Fn = this;
	return function (...args2) {
		return obj.Fn([...args, ...args2]);
	};
};

// console.log(p1.getUser.myCall(p2, 20));
// console.log(p1.getUser.myApply(p2, [25]));
const res = p1.getUser.myBind(p2);
console.log(res(30));
