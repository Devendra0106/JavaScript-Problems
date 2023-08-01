//# Scope Chain
// Scope chain is used to resolve the value of variable names in JS.
// Scope chain in JS is lexically defined, which means we can see what the scope chain will be by looking at the code.

var a = 'Hi';

function first(){
  var b = 'Dev';
  
  second();
  
  function second(){
    var c = 'Man';
    console.log(a+b+c); // Hi Dev Man
  }
}

function three(){
  var d = 'Yoo';
  console.log(a+b+c+d); // Error: b is not defined, cz not in lexical scope of three()
}

first();

