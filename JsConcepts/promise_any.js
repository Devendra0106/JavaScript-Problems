//Promise.any(): Waits for first settled/resolved success.

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => reject("P1 fail"), 3000);
});
// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("P1 success"), 3000);
// });

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => reject("P2 fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => reject("P3 fail"), 2000);
});

Promise.any([p1, p2, p3])
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
		console.log(err.errors); // ['P1 fail', 'P2 fail', 'P3 fail']
	});
//P1 success after 3 sec --> P1 success
//all fail after 3 secs --> AggregateError: All promises were rejected
