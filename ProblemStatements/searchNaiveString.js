function searchNaiveString(long, short) {
	let c = 0;
	for (let i = 0; i < long.length; i++) {
		let j = 0;
		while (j < short.length) {
			if (long[i + j] === short[j]) {
				j++;
			} else {
				break;
			}
		}
		console.log("i-->", long[i], "j-->", j);
		if (j === short.length) c++;
	}
	return c;
}

let res = searchNaiveString("wowomgzomg", "omg");
console.log("Res-->", res);
