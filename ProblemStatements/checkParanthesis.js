function checkParanthesis(input) {
	let i = 0;
	let arr = [];
	while (i < input.length) {
		let bracket = input[i];
		if (bracket === "(" || bracket === "[" || bracket === "{") {
			arr.push(bracket);
		} else {
			let popped = arr.pop();
			if (bracket === ")" && popped !== "(") {
				return false;
			}
			if (bracket === "]" && popped !== "[") {
				return false;
			}
			if (bracket === "}" && popped !== "{") {
				return false;
			}
		}
		i++;
	}
	return true;
}

let res = checkParanthesis("(())[(]");
