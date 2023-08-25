let arr = [2, 3, 1, 4];
let i = 0,
	j = 1;
function isSorted(arr) {
	if (arr[i] < arr[j]) {
		i++;
		j++;
	}
}
