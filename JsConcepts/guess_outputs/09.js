const obj = { prop: "old" };
const arr = [obj];

obj.prop = "new";
console.log(arr[0].prop);

// Answer--> The output will be 'new'.
// Explanation--> The const keyword only prevents the variable itself from being reassigned. The object it references can still be mutated. The array arr holds a reference to the same object as obj, so changing the property value is reflected in the array.
