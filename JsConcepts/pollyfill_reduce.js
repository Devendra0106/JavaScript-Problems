//.reduce ==> HOF executes reducer function on each element of the array resulting in single value.

let arr = [1, 2, 3, 4, 5];
let res = arr.reduce((acc, curr) => acc + curr, 0);
console.log(res);
