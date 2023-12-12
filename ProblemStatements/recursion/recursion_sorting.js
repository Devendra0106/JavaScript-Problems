let arr = [2, 3, 1, 4, 8, 7, 5, 9, 6];
let resArray = [];
let i = 0,
	j = 1;

function isSorted(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) return false;
	}
	return true;
}
function sortArray(arr) {
	if (isSorted(arr)) {
		resArray = arr;
		return;
	}
	if (arr[i] < arr[j]) {
		i++;
		j++;
		sortArray(arr);
	} else {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		i = 0;
		j = 1;
		sortArray(arr);
	}
}

sortArray(arr);
console.log("resArray-->", resArray);
