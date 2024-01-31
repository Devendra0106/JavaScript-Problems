console.log("A");
(async function () {
	const x = await 5;
	console.log("C");
})();
console.log("B");

//o/p -->
// A
// B
// C
