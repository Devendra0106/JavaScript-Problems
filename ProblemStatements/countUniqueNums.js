function countUniqueNums(arr) {
  let i=0, j=1;
  while (j<=arr.length) {
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i;
}
                                
let arr = [1,1,2,2,3,4,4,5,6,6,7,8]; //input array is sorted
countUniqueNums(arr);
