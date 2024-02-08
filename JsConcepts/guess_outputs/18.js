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

//Shallow Copy
let shallow = { ...abc };
console.log(shallow.address.street);
abc.address.street = "Aundh";
shallow.address.more.b.k = "inner";
console.log(abc.address.more.b.k);
console.log(shallow.address.more.b.k);

//Deep Copy
let deep = JSON.parse(JSON.stringify(abc));
console.log(deep.address.street);
abc.address.street = "Aundh";
deep.address.more.b.k = "again";
console.log(abc.address.more.b.k);
console.log(deep.address.more.b.k);
