//Async function: A newer and cleaner syntax of working with asynchronous code. Async function always returns a promise.
//Syntax makeup for promises.

//function returns value --> promise resolved
//function throws exception --> promise rejected

// const login = async (uName, pwd) => {
// 	if (!uName || !pwd) throw "Username or password missing";
// 	if (pwd === "pass") return "Loggedin successfully";
// 	throw "Invalid password!";
// };

// login("Dev", "passs")
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

//Await: await keyword can be used only inside async functions.
//await will pause execution of function, waiting for promise to be resolved.
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1 Resolved value!");
	}, 5000);
});
0;

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 2 Resolved value!");
	}, 10000);
});

const handlePromiseUsingAsyncAwait = async () => {
	console.log("Start");
	const res1 = await p1; //JS Engine will wait for promise tobe resolved.
	console.log("res1", res1);
	const res2 = await p2;
	console.log("res2", res2);
	console.log("End");
};
handlePromiseUsingAsyncAwait();
//o/p -->
// Start
// res1 Promise 1 Resolved value!
// res2 Promise 2 Resolved value!
// End

// JS Engine won't wait for promise tobe resolve, it will start execution of next line immediately.
// const handlePromiseUsingThen = () => {
// 	console.log("Before");
// 	p.then((res) => console.log(res));
// 	console.log("After");
// };
// handlePromiseUsingThen();
//o/p -->
// Before
// After
// Promise Resolved value! --> after 1 sec
