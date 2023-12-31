//Promise: It's an object representing eventual completion or failure of asynchronous operation.
let checkNumber = (n) => {
	return new Promise((resolve, reject) => {
		if (n > 0) {
			resolve(`${n} is Positive`);
		} else {
			reject(`${n} is Negative`);
		}
	});
};

//A promise is returned object to which we can attach callbacks instead of passing callbacks into a function.
const success = (res) => {
	console.log("res-->", res);
};
const error = (err) => {
	console.log("err-->", err);
};
checkNumber(10).then(success).catch(error);

//Promise chaining:
// checkNumber(10)
// 	.then((res) => {
// 		console.log("res-->", res);
// 		return checkNumber(20); // return is important here to chain the promise.
// 	})
// 	.then((res) => {
// 		console.log("res-->", res);
// 		return checkNumber(30);
// 	})
// 	.then((res) => {
// 		console.log("res-->", res);
// 		return checkNumber(-40);
// 	})
// 	.catch((err) => console.log("err-->", err));
