function checkAnagrams(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let count = {};
	for (let c of str1) {
		count[c] = (count[c] || 0) + 1;
	}
	console.log(count);
	for (let c of str2) {
		if (!count[c]) {
			return false;
		}
		count[c]--;
	}
	console.log(count);
	return true;
}

checkAnagrams("ram", "sam");
