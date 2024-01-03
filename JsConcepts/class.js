//Class: A blueprint for creating objects with pre-defined properties and methods.
class Student {
	//Constructor
	constructor(fName, lName, year) {
		this.fName = fName;
		this.lName = lName;
		this.grade = year;
	}
	//Instance Method
	details() {
		return `Full Name of student is ${this.fName} ${this.lName}.`;
	}
	//Static Method(Class Method): The static keyword defines a static method for a class.
	//Static methods are called without instantiating their class & cannot be called through a class instance.
	//Static methods are often used to create utility functions for an application.
	static exp(fName, exp) {
		return `${fName}'s experince is of ${exp} years!`;
	}
}

// Creating objects from classes
let john = new Student("John", "Doe", 5);
console.log(john.details());
console.log(Student.exp("Sam", 5));
