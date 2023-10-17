class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	test() {
		return "Hello test!";
	}
	info = () => {
		return `I'm ${this.name}, ${this.age} old`;
	};
}

console.log(User); // [class User]
let sam = new User("Sam", 25);
console.log(sam); // User { info: [Function: info], name: 'Sam', age: 25 }

// class expression -->
// const User = class{}
