var a = (b = c = 10);
console.log(a, b, c); // 10 10 10

// In strict mode b can't be accessed outside closure, without strict mode it will be accessed.
(function () {
	var a = (b = 3); // evaluates to b = 3; and var a = b.
})();

// b = 3;
// var a = b;
