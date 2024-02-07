let abc = {
	name: "Dev",
	age: 25,
	address: {
		street: "Wakad",
		city: "Pune",
		more: {
			a: 10,
			b: {
				k: 20,
			},
		},
	},
};

let xyz = { ...abc };
console.log(abc.address.street);
abc.address.street = "Aundh";
xyz.address.more.b.k = "inner";
console.log(abc.address.more.b.k);
console.log(xyz.address.more.b.k);
