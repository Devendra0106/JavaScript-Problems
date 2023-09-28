console.log(2 + true); // 3
//When JavaScript encounters a + operator with a number and a boolean, it automatically converts the boolean to its numeric equivalent (true becomes 1). Therefore, the expression becomes 2 + 1, which evaluates to 3

console.log([] == ![]); // true
//This is an example of a tricky comparison involving truthy and falsy values. The ! operator negates the truthiness of an object. An empty array [] is truthy, so ![] evaluates to false. When comparing [] with false, JavaScript performs type coercion, converting false to a numeric value (0). Thus, the expression becomes [] == 0, and due to another type coercion, the empty array is converted to an empty string '', which is also converted to the numeric value 0. Hence, the expression 0 == 0 evaluates to true.

console.log(NaN === NaN); // false
// NaN (Not a Number) is a special numeric value in JavaScript, and interestingly, NaN is not equal to itself. Therefore, the expression NaN === NaN evaluates to false.

console.log(null == undefined); // true
// In JavaScript, null and undefined are considered equal only when using loose equality (==). Therefore, null == undefined evaluates to true.

console.log(null === undefined); // false
//False due to strict equality

console.log("5" - -"3"); //8
//The unary - operator can be used to convert a string to a number. In this case, - '3' converts the string '3' to the number -3. Then, the expression becomes '5' - (-3), which is equivalent to '5' + 3. JavaScript performs string concatenation since one of the operands is a string, resulting in the string '53'. Finally, the result is converted to a number, yielding 8
