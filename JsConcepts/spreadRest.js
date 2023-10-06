let arr = [1, 2, 3, 40, 5, 6];

//Spread --> spreads out elements from array
console.log(Math.max(...arr));
console.log(Math.min(...arr));

//Rest --> Groups elements into array which are passed as arguments to a function
function findSum(...rest) {
	return rest.reduce((acc, curr) => acc + curr, 0);
}
console.log(findSum(1, 2, 3, 4, 5));
