var a = 5,
	b = 10;

function foo(strings, ...values) {
	console.log(". " + strings[0] + ".");
	console.log("." + strings[1] + ".");
	console.log("." + strings[2] + ".");
	console.log(values[0]);
	console.log(values[1]);
	console.log(values[2]);
}

foo`sum ${a + b} product ${a * b} division ${a / b}`;
