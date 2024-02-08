//write .on and .fire method such that
let resCallback = {};
var $ = {
	fire: function (event) {
		if (resCallback[event]) {
			resCallback[event]();
		}
	},
	on: function (event, callback) {
		resCallback[event] = callback;
	},
};

$.on("click", function () {
	console.log("Hello Dude you clicked me");
});

$.on("move", function () {
	console.log("Hello Dude you moved over me");
});

$.fire("click");
//should print 'Hello Dude you clicked me'

$.fire("move");
//should print 'Hello Dude you moved over me'
