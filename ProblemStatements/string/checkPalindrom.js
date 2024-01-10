function checkPalindrom(input) {
	let left = 0,
		right = input.length - 1;
	while (left < right) {
		if (input[left] !== input[right]) return false;
		left++;
		right--;
	}
	return true;
}

let res = checkPalindrom("level");
console.log(res);
