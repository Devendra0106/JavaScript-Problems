console.log("Start");
setTimeout(() => {
	console.log("1");

	setTimeout(() => {
		console.log("2");

		setTimeout(() => {
			console.log("3");
			console.log("3-->");
		}, 1000);

		console.log("2-->");
	}, 1000);

	console.log("1-->");
}, 1000);

console.log("End");

// Output -->
// Start
// End
// 1
// 1-->
// 2
// 2-->
// 3
// 3-->
