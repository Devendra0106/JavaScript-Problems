//.map --> HOF creates new array with result of calling a callback on every element in array.

let arr = [1, 2, 3, 4, 5];
let res = arr.map((n) => Math.pow(10, 4) + n);
console.log(res);
