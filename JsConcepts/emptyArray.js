let arr1 = [1, 2, 3, 4, 5, 6];

//Method 1
arr1.length = 0;

//Method 2
arr1.splice(0, arr1.length);

//Method 3
while (arr1.length > 0) {
	let popLen = arr1.pop();
}
