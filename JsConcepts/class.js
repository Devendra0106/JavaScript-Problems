//Class: A blueprint for creating objects with pre-defined properties and methods.
class Student {
	constructor(fName, lName, year) {
		this.fName = fName;
		this.lName = lName;
		this.grade = year;
	}
}

// Creating objects from classes
let john = new Student("John", "Doe", 5);
console.log("John-->", john);
