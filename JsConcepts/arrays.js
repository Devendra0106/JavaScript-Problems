let arr = [1, 2, 3, 4, 5, 6];
arr.pop(); // removes & returns last element from array
let res = arr.push(89); // adds at last & returns length of array

arr.shift(); // removes & returns first element from array
res = arr.unshift(100); // adds at first & returns length of array

res = arr.concat(5); // returns new array

res = arr.reverse(); // returns new array

res = arr.sort(); // returns new array

res = arr.splice(3, 2); // returns arr of length 2. Removes 2 elements from index 2, modifies existing array.
