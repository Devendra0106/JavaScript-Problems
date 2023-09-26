console.log(2 + true); // 3

console.log([] == ![]); // true

console.log(NaN === NaN); // false
// NaN (Not a Number) is a special numeric value in JavaScript, and interestingly, NaN is not equal to itself. Therefore, the expression NaN === NaN evaluates to false.

console.log(null == undefined); // true

console.log(null === undefined); // false

console.log("5" - -"3"); //8
//The unary - operator can be used to convert a string to a number. In this case, - '3' converts the string '3' to the number -3. Then, the expression becomes '5' - (-3), which is equivalent to '5' + 3. JavaScript performs string concatenation since one of the operands is a string, resulting in the string '53'. Finally, the result is converted to a number, yielding 8
