//.filter --> HOF created new array with all elements passing the test condition implemented by provided function.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = arr.filter((n) => n % 2 === 0);
console.log(res);
