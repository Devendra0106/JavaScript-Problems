let giveCharCount = (input) => {
	let res = {};
	for (let char of input) {
		if (isAlphaNumericChar(char)) {
			char = char.toLowerCase();
			res[char] = ++res[char] || 1;
		}
		// char = char.toLowerCase();
		// if (/[0-9a-z]/.test(char)) res[char] = ++res[char] || 1;
	}
	return res;
};

let isAlphaNumericChar = (char) => {
	let code = char.charCodeAt(0);
	if (
		!(code >= 48 && code <= 57) && // numeric(0-9)
		!(code >= 65 && code <= 90) && // upperAlpha(A-Z)
		!(code >= 97 && code <= 122) // lowerAlpha(a-z)
	) {
		return false;
	}
	return true;
};

let res = giveCharCount("Hello World 123!!!");
console.log(res);
