//# Scope Chain
// Scope chain is used to resolve the value of variable names in JS.

var a = 'Hi';

function first(){
  var b = 'Dev';
  
  second();
  
  function second(){
    var c = 'Man';
    console.log(a+b+c); // Hi Dev Man
  }

  first();
}
