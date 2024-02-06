console.log("Start");

Promise.resolve().then(() => console.log("One"));

setTimeout(() => {
	console.log("Two");
}, 100);

Promise.resolve().then(() => console.log("Three"));

console.log("end");

// Start
// end
// One
// Three
// Two
