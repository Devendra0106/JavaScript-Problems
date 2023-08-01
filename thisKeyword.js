// #this
// In JS this keyword refers to the object it belongs to.

// It has different values based on where it is used.
// 1. Alone, this refers to the global object.
// 2. In a Regular function, refers to the global object.
// 3. In a method in object, refers to owner object.
// 4. In a function, in strict mode, this is undefined.

//3
const user = {
  name: 'Dev',
  sum: function(){ // method in object
    var sum = 2 + 5;
    console.log("Sum is:"+ sum);
    console.log(this); // refers to user object
  }
}
user.sum();

//4
"use strict"
function sum(){
  var sum = 2 + 3;
  console.log(sum); // 5
  console.log(this); //undefined
}
sum();
