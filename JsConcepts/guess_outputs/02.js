let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Double element at even position and triple at odd position in array
let res = arr.map((n) => (n = n % 2 === 0 ? n * 2 : n * 3));

console.log(res);
