// // # Functions: Functions are first class citizens(functions are treated like any other variable).

// //1. In JS we can assign a function to a variable.
// const handle = function () {
// 	console.log("Called");
// };

// //2. Pass a function as an Argument.
// const myName = () => {
// 	return "Devendra";
// };
// const greeting = (greet, person) => {
// 	console.log(greet + " " + person());
// };
// greeting("Hello", myName);

// //3. Returning functions.
// function a() {
// 	return function b() {
// 		console.log("Returning from function");
// 	};
// }
// const c = a();
// c();

// // Callback Functions: Any function that is passed as an argument to another function.
// //Syntactically compact alternative to regular function expression.
// function a(name, cb) {
// 	console.log(`Hello ${name} From A`);
// 	cb();
// }
// function b() {
// 	console.log("From B");
// }
// a("Dev", b);

// //Anonymous Function: Function without any name
// document.addEventListener("click", function () {
// 	console.log("Hi");
// });

// //Pure function: Function said to be pure if same input always provides same output.

// //Currying: Currying a function means converting a function of N arity into N functions of arity 1.
function uncurried(a, b) {
	// arity = 2
	return a + b;
}
const res = uncurried.bind(this, 2);
console.log(res(5));

function curried(a) {
	//arity = 1
	return function (b) {
		//arity = 1
		return a + b;
	};
}
const res1 = curried(2);
console.log(res1(5));
