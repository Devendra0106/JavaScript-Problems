//Array destructuring
let arr = [1, 2, 3, 4, 5, 6, 7];
let [a, b, ...c] = arr;
console.log(a, b, c); // 1, 2, [ 3, 4, 5, 6, 7 ]

//Object destructuring
let obj = {
	fName: "Dev",
	add: "India",
	num: "10001001",
};
let { add, fName } = obj;
console.log(fName, add);

//Nested Object destructuring
let user = {
	fullName: {
		firstName: "ABC",
		lastName: "XYZ",
	},
	age: 25,
};

let {
	fullName: { firstName, lastName },
	age,
} = user;
console.log(lastName, age);

//Params destructing
let emp = {
	fName: "John",
	lName: "Smith",
	add: "India",
};
function empDetails({ fName, add }) {
	return `${fName} is from ${add}`;
}
console.log(empDetails(emp));

//Tricky one
let arrr = [1, 2, 3, (5, 5, 7), (3, 8, 9)];
let [x, y, ...z] = arrr;
console.log(z);
