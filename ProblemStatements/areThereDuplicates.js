function areThereDuplicates(...arr) {
	let map = {};
	for (let el of arr) {
		map[el] = ++map[el] || 1;
	}
	for (let key in map) {
		if (map[key] > 1) return true;
	}
	return false;
}

// let res = areThereDuplicates(1, 3, 2, 4, 2);
let res = areThereDuplicates("a", "b", "a", "c", "m");
console.log("Res-->", res);
