//sliding window
function findLongestSubstring(str) {
	if (!str) return 0;
	let start = 0,
		maxLen = 0,
		seen = {};
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		maxLen = Math.max(maxLen, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return maxLen;
}

// let res = findLongestSubstring(""); // 0
let res = findLongestSubstring("rithmschool"); // 7
//let res = findLongestSubstring('thisisawesome') // 6
//let res = findLongestSubstring('thecatinthehat') // 7
//let res = findLongestSubstring('bbbbbb') // 1
//let res = findLongestSubstring('longestsubstring') // 8
//let res = findLongestSubstring('thisishowwedoit') // 6

console.log("Res-->", res);
