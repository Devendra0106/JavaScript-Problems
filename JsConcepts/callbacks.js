let c = 0;
let logTheColor = function (color, delay, doNext) {
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

//o/p --> logs each entry one by one after each 1 sec.
// 1 Color:  Red
// 2 Color:  Green
// 3 Color:  Blue
// 4 Color:  Yellow
// 5 Color:  Orange
// 6 Color:  White
