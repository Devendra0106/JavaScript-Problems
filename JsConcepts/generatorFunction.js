// Generator-Function: A generator-function is defined like a normal function, but whenever it needs to
//generate a value, it does so with the yield keyword rather than return. The yield statement suspends the
//function’s execution and sends a value back to the caller, but retains enough state to enable the function to
//resume where it is left off. When resumed, the function continues execution immediately after the last yield run.
// yield: pauses the generator execution and returns the value of the expression which is being written after the yield keyword.
// yield*: it iterates over the operand and returns each value until done is true.

//......................
function* fun() {
	yield 10;
	yield 20;
	yield 30;
}

// Calling the Generate Function
let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// o/p--> 10,20,30

//..........................
const arr = ["a", "b", "c"];

function* generator01() {
	yield 1;
	yield* arr;
	yield 2;
}

for (let value of generator01()) {
	console.log(value);
}
//o/p--> 1,a,b,c,2

//..........................................
const firstPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(1), 5000);
	});
};

const secondPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(2), 3000);
	});
};

async function* generator02() {
	const firstPromiseResult = await firstPromise();
	yield firstPromiseResult;
	const secondPromiseResult = await secondPromise();
	yield secondPromiseResult;
}

let it = generator02();
for (let value of it) {
	console.log(value);
}
//o/p-->
// (after 5 seconds)
// 1
// (after 3 seconds)
// 2
