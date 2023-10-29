//Promise.all(): Wait for all of them to finish
//As soon as any from all passed fails, it won't wait for other promises, immediately will throw an error.

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("P2 success"), 1000);
});

// const p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("P3 success"), 2000);
// });
const p3 = new Promise((resolve, reject) => {
	setTimeout(() => reject("P3 failed"), 1000);
});

Promise.all([p1, p2, p3])
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
//fail after 2 secs
