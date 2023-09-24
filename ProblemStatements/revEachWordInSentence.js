function reverseBySeparator(inputString, separator) {
	return inputString.split(separator).reverse().join(separator);
}

const input = "Javascript is amazing programming language";
let reverseString = reverseBySeparator(input, "");
console.log(reverseString);
let reverseEachWord = reverseBySeparator(reverseString, " ");
console.log(reverseEachWord);
