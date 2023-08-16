function largestSum(arr, num) {
    let max = 0, temp = 0, c = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i+j];
        }
        if(max < temp){
            c++;
            max = temp;
        }
    }
    return max;
}

const largeSum = largestSum([1,2,3,4,6,7,8,4,3,5], 4);
