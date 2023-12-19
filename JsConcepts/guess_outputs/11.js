function myPromise(n) {
	return new Promise(function (resolve) {
		return resolve(n);
	});
}

function myFunction(n) {
	var start = myPromise(n);
	console.log("start-->", start);
	while ((n -= 1)) {
		console.log("n -->", n);
		start = start.then(
			function (n, val) {
				console.log("n, val -->", n, val);
				return n * val;
			}.bind(this, n)
		);
	}
	console.log("start-->end", start);
	return start;
}

myFunction(5);
