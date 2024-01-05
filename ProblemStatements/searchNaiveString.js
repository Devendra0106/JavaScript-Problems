function searchNaiveString(long, short) {
	let c = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) c++;
		}
	}
	return c;
}

let res = searchNaiveString("wowomgxomg", "omg");
console.log("Res-->", res);
