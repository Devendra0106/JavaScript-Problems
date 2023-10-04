const checkNumber = (num, success, failure) => {
	if (num > 0) {
		success(`${num} is Positive`);
	} else {
		failure(`${num} is Negative`);
	}
};

checkNumber(
	10,
	function (res) {
		console.log(res);
	},
	function (err) {
		console.log(err);
	}
);
