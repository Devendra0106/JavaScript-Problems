function findOdd(arr) {
	let odds = [];
	if (arr.length === 0) return odds;
	if (arr[0] % 2 !== 0) odds.push(arr[0]);
	odds = odds.concat(findOdd(arr.slice(1)));
	return odds;
}

let res = findOdd([1, 2, 3, 4, 5]);
console.log("Res-->", res);
