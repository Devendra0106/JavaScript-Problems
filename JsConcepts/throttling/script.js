//Throttling: Ensures that a function is not executed more than once in a specified time interval, regardless of how many times it's called.
const myThrottle = (cb, delay) => {
	let last = 0;
	return function (...args) {
		let now = new Date().getTime();
		if (now - last < delay) return;
		last = now;
		return cb(...args);
	};
};

let btn = document.getElementById("btn");
let clicked = document.getElementById("clicked");
let debounceClicked = document.getElementById("debounce-clicked");

let click = 0;
let debounceClick = 0;

// Lodash method
// const debounceCount = _.throttle(() => {
// 	debounceClicked.innerText = ++debounceClick;
// }, 1000);

const throttleCount = myThrottle(() => {
	debounceClicked.innerText = ++debounceClick;
}, 1000);

btn.addEventListener("click", () => {
	clicked.innerText = ++click;
	throttleCount();
	console.log("clicked", click, debounceClick);
});
