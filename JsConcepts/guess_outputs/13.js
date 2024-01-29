console.log(1);

setTimeout(() => {
	console.log(10);
}, 10);

console.log(20);

new Promise((res, rej) => res(console.log(30)));

console.log(40);

console.log(50);

console.log(60);

//o/p -->
// 1;
// 20;
// 30;
// 40;
// 50;
// 60;
// 10;
