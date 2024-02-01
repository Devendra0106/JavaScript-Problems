//Make variable ‘foo’ private so that no one can access it?
// let foo = 1;

// function add() {
// 	foo = foo + 1;
// 	return foo;
// }

// console.log(add());
// console.log(add());
// console.log(add());
// //foo=100;
// console.log(add());
// console.log(add());
// console.log(add());

//---------------------- code -----------------------

function increment(params) {
	let foo = 1;

	return function add() {
		foo = foo + 1;
		return foo;
	};
}

let add = increment();

console.log(add());
console.log(add());
console.log(add());
foo = 100;
console.log(add());
console.log(add());
console.log(add());
