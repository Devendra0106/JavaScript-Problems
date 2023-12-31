//Recursion: Invoke same function with different input until you reach your base case.
//Base case: The condition where recursion ends.
let max = 10;
function count(num) {
	if (num > max) {
		return;
	}
	console.log("Count:", num);
	num++;
	count(num);
}

count(1);
