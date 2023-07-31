//# Hoisting:
//JS mechanism where variables n function declarations are moved to top of their scope before the code execution.

//1. Function Hoisting
//For each function property created in variable Object which is pointing to that function.
sum01(2, 7);
function sum01(a, b) {
    return a + b;
}

//After creation phase, function declarations are moved to top of their scope.
function sum01(a, b) {
    return a + b;
}
sum01(2, 7);

//Hoisting wont work with function expressions & arrow functions

//2. Variable Hoisting
//For each variable property created in variable Object which is then set to undefined.
console.log(a); // undefined
var a;
a = 10;

//After creation phase, variable declarations are moved to top of their scope and set to undefined.
var a = undefined;
console.log(a);
a = 10;

