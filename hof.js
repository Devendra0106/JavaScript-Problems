// HOF: Take other functions as arguments or return functions as their results.
// A higher order function is a function that takes at least one function as an input and/or returns a function as an output.
const question = (name) => {
  if(name === 'Dev'){
    return function(topic) {
      return `Hi ${name}, Explain ${topic}`;
    }
  } else if (name === 'Sam'){
    return function(topic) {
      return `Hi ${name}, Explain ${topic}`;
    }
  }
}
const q = question('Dev');
console.log(q('UI'));
console.log(q('UX'));
