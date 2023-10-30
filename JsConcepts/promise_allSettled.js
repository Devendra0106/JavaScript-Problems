//Promise.allSettled(): Wait for all promises to settled.
//safest option among all Promise APIs.

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve("P2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => reject("P3 failed"), 1000);
});

Promise.allSettled([p1, p2, p3])
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

//o/p --> Returs result once all promises are settled.
// [
//     {
//         "status": "fulfilled",
//         "value": "P1 success"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P2 success"
//     },
//     {
//         "status": "rejected",
//         "reason": "P3 failed"
//     }
// ]
