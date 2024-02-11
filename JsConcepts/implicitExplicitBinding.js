// let obj1 = {
// 	name: "Dev",
// 	display: function () {
// 		console.log(this.name);
// 	},
// };
var c = 10;

let obj1 = {
	name: "Dev",
	display: () => {
		console.log(this);
	},
};

let obj2 = {
	name: "ABC",
};

// obj1.display();           //Dev
// obj1.display.call(obj2); //with normal function, ABC

obj1.display.call(obj2); //with arrow function, window object
