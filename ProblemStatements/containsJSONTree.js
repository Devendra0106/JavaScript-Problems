var nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: "foo2",
					},
				},
			},
		},
	},
};

function contains(nestedObject, value) {
	for (let key in nestedObject) {
		console.log("outer loop-->", nestedObject[key], typeof nestedObject[key]);
		if (
			typeof nestedObject[key] === "object" &&
			typeof nestedObject[key] !== null
		) {
			if (contains(nestedObject[key], value)) return true;
		} else {
			if (nestedObject[key] === value) return true;
		}
	}
	return false;
}

// let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(doesntHaveIt);
