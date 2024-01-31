console.log("start");

const promise1 = new Promise((resolve, reject) => {
	console.log(1);
	return resolve(3);
}).then((res) => console.log(res));

console.log("end");

//o/p -->
// "start";
// 1;
// "end";
// 3;
