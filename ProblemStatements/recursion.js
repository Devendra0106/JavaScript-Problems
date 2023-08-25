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
