const counter = function () {
	let count = 0;
	this.increment = function () {
		++count;
	};
	this.decrement = function () {
		--count;
	};
	this.getCount = function () {
		console.log(count);
	};
};

const c1 = new counter();
c1.increment();
c1.increment();
c1.increment();
c1.increment();
c1.getCount();
c1.decrement();
c1.decrement();
c1.getCount();
