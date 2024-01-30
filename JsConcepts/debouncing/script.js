//Debouncing:  Delays the execution of a function until after a certain period of inactivity.
const myDebounce = (cb, delay) => {
	let timer;
	return function (...args) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			cb(...args);
		}, delay);
	};
};

//Example 1:
//-----------
let input = document.getElementById("text-input");
let clicked = document.getElementById("clicked");
let debounceClicked = document.getElementById("debounce-clicked");

const debounceData = myDebounce((text) => {
	debounceClicked.innerText = text;
}, 1000);

input.addEventListener("input", (event) => {
	console.log("text-->", event.target.value);
	clicked.innerText = event.target.value;
	debounceData(event.target.value);
});

//Example 2:
//-----------
// let btn = document.getElementById("btn");
// let clicked = document.getElementById("clicked");
// let debounceClicked = document.getElementById("debounce-clicked");

// let click = 0;
// let debounceClick = 0;

//Lodash method
// const debounceCount = _.debounce(() => {
// 	debounceClicked.innerText = ++debounceClick;
// }, 1000);

// const debounceCount = myDebounce(() => {
// 	debounceClicked.innerText = ++debounceClick;
// }, 1000);

// btn.addEventListener("click", () => {
// 	clicked.innerText = ++click;
// 	debounceCount();
// 	console.log("clicked", click, debounceClick);
// });
