//Callbacks
let c = 0;
const logTheColor = (color, delay, doNext) => {
	++c;
	setTimeout(() => {
		console.log(c, "Color: ", color);
		doNext && doNext();
	}, delay);
};

logTheColor("Red", 1000, () =>
	logTheColor("Green", 1000, () =>
		logTheColor("Blue", 1000, () =>
			logTheColor("Yellow", 1000, () =>
				logTheColor("Orange", 1000, () => logTheColor("White", 1000))
			)
		)
	)
);

//Using promise
let cn = 0;
const logTheColorUsingPromise = (color, delay) => {
	++cn;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(cn, "Color: ", color);
			resolve();
		}, delay);
	});
};

logTheColorUsingPromise("Red", 1000)
	.then(() => logTheColorUsingPromise("Green", 1000))
	.then(() => logTheColorUsingPromise("Blue", 1000))
	.then(() => logTheColorUsingPromise("Yellow", 1000))
	.then(() => logTheColorUsingPromise("Orange", 1000))
	.then(() => logTheColorUsingPromise("White", 1000))
	.catch((err) => console.log(err));

//o/p --> logs each entry one by one after each 1 sec.
// 1 Color:  Red
// 2 Color:  Green
// 3 Color:  Blue
// 4 Color:  Yellow
// 5 Color:  Orange
// 6 Color:  White
