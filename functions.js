// # Functions: Functions are first class citizens(functions are treated like any other variable).

//1. In JS we can assign a function to a variable.
const handle = function(){
  console.log('Called');
}

//2. Pass a function as an Argument.
const myName = () => {
  return "Devendra";
}
const greeting = (greet, person) => {
  console.log(greet + " " + person());
}
greeting("Hello", myName);

//3. Returning functions.
function a(){
  return function b(){
    console.log('Returning from function');
  }
}
const c = a();
c();

// Callback Functions: Any function that is passed as an argument to another function.
function a(name, cb){
  console.log(`Hello ${name} From A`);
  cb();
}
function b(){
  console.log('From B');
}
a('Dev', b);

//Anonymous Function: Function without any name
document.addEventListener('click', function(){
  console.log('Hi');
})


