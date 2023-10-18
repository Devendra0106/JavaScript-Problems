let obj = {};

obj.name = "Dev";
obj.age = 23;
obj[1235] = "number as property";
obj["temp var"] = "property name with space";

let str = "age";

console.log(obj[str]); // returns 23
console.log(obj[1235]); // can be accessed using bracket notation only.
console.log(obj["temp var"]); // can be accessed using bracket notation only.
console.log(Object.keys(obj).length); // Get number of elements in object.
console.log(obj.hasOwnProperty("age")); // Checks if age property exists on object.
console.log(delete obj.age); // deletes desired prop from obj

for (let el in obj) {
	console.log(el, "-->", obj[el]);
}

let obj01 = {
	name: "Dev",
	arr: [1, 2, 3, 4, 5],
	add: function () {
		console.log("My name:", this.name);
		this.arr.forEach((el) => console.log(el));
	},
};

obj01.add();

console.log(obj01);
