// function counter(init) {
// 	let count = init;
// 	return {
// 		add: function (val) {
// 			count += val;
// 		},
// 		get: function () {
// 			return count;
// 		},
// 	};
// }

// let obj = counter(100);
// obj.add(5);
// obj.add(10);
// console.log(obj.get());

function counter() {
	let count = 0;
	return function () {
		console.log(++count);
	};
}

const c1 = counter();
c1(); //1
c1(); //2

const c2 = counter();
c2(); //1
c2(); //2
c2(); //3
