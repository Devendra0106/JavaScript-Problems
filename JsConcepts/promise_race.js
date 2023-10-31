//Promise.race(): Returns value of first settled promise(Either it is resolved or rejected).

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => reject("P2 fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("P3 success"), 2000);
});

Promise.race([p1, p2, p3])
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
//P2 fail after 2 secs --> P2 fail
