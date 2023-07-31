//# Hoisting:
//JS mechanism where variables n function declarations are moved to top of their scope before the code execution.

//1. Function Hoisting
sum01(2, 7);
function sum01(a, b) {
    return a + b;
}

//will be, after creation phase, function declarations are moved to top of their scope
function sum01(a, b) {
    return a + b;
}
sum01(2, 7);

//Hoisting wont work with function expressions & arrow functions

//2. Variable Hoisting

 

