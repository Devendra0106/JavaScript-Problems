//Async function: A newer and cleaner syntax of working with asynchronous code. Async function always returns a promise.
//Syntax makeup for promises.

//function returns value --> promise resolved
//function throws exception --> promise rejected

const login = async (uName, pwd) => {
	if (!uName || !pwd) throw "Username or password missing";
	if (pwd === "pass") return "Loggedin successfully";
	throw "Invalid password!";
};

login("Dev", "passs")
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

//Await: await keyword can be used only inside functions declared with async.
//await will pause execution of function, waiting for promise to be resolved.
