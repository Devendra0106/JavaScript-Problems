// #Everything is an Object in JS.

//Type Checks
typeof ""; //string
typeof []; //object
typeof null; //object
typeof function test() {}; //function

//Function as Object
const check = () => {
	console.log("checking");
};
check.test = "Check is it object";
console.log(check.test); //Check is it object

//Array.isArray --> Check given object is array or not
let arr = [1, 2, 3];
Array.isArray(arr); //true

//Pass by value
let a = 5;
let b = a;
b = a + b; // b = 10

//Pass by reference
// 1.
let obj1 = {
	a: "sam",
	b: 100,
};
let obj2 = obj1;
obj2.b = 555;
console.log(obj1); //{a: 'sam', b: 555}
console.log(obj2); //{a: 'sam', b: 555}

// 2.
let arr1 = [1, 4, 5, 6];
let arr2 = arr1;
arr2.push(100);

console.log(arr1); //[1, 4, 5, 6, 100]
console.log(arr2); //[1, 4, 5, 6, 100]

// 3.
let arr01 = [1, 4, 5, 6];
let arr02 = [].concat(arr1);
arr2.push(100);

console.log(arr01); //[1, 4, 5, 6]
console.log(arr02); //[1, 4, 5, 6, 100]
