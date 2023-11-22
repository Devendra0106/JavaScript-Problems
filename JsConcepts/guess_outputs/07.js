console.log("Start");

Promise.resolve().then(() => console.log("Promise 1")); //microtask queue --> more priority than callback queue.
setTimeout(() => console.log("Timeout 1"), 0); //macrostack(Callback) queue.

Promise.resolve().then(() => console.log("Promise 2"));
setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

//o/p-->
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
