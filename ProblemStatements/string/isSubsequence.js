function isSubsequence(str1, str2) {
	let i = 0,
		j = 0;
	while (j < str2.length) {
		if (str1[i] === str2[j]) {
			i++;
		}
		j++;
	}
	if (i === str1.length) {
		return true;
	}
	return false;
}

// let res = isSubsequence("hello", "hello world"); // true
// let res = isSubsequence("sing", "sting"); // true
// let res = isSubsequence("abc", "abracadabra"); // true
let res = isSubsequence("abc", "acb"); // false (order matters)
console.log("Res-->", res);
