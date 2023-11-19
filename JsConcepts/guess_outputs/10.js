function* generateSequence() {
	yield 1;
	yield 2;
	return 3;
}

const generator = generateSequence();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//o/p-->
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: true }

//Generator functions yield values one by one and can also return a final value using the return statement.
//The done property indicates whether the generator has finished.
