// Inner function can have access to the outer function variables as well as all the global variables.
// Combination of a function and the lexical environment within which that function was declared.
// [return statement does not execute the inner function -  function is executed only when followed by (), but rather the return statement returns the entire body of the function.]
function outer(a) {
    return function inner(b){
        return a + b;
    }
}
let sum = outer(3);
sum(2);

function outer(a) {
  let b = 10;
  function inner() {
    console.log(`Sum is ${a+b}.`);  
  }
  inner();
}
outer(5);

const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a+b;
    console.log(`Sum is ${sum}.`);  
  }
  return inner;
}

const inner = outerFun(5);
console.dir(inner);
inner();

const question = (name) => {
  return function inner(topic) {
    if(name === 'Dev'){
        return `Hi ${name}, Explain ${topic}`;
    } else if (name === 'Sam'){
        return `Hi ${name}, Explain ${topic}`;
    }
  }
}
const q = question('Dev');
q('UI');



