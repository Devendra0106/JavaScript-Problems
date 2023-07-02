function x() {
	for (var i = 0; i < 5; i++) {
		setTimeout(() => {
			//if i is var --> logs 5,5,5,5,5 after 5 sec at same time.
			//if i is let --> logs 0,1,2,3,4 after 5 sec at same time.
			console.log(i);
		}, 1000); // put (i * 1000) to log each entry after a sec instead of logging at same time.
	}
}
x();

//To achieve let behaviour using var
function x1() {
	for (var i = 0; i < 5; i++) {
		function close(n) {
			setTimeout(() => {
				console.log(n);
			}, 1000); // put (i * 1000) to log each entry after a sec instead of logging at same time.
		}
		close(i);
	}
}
// x1();
