let stack = [];

//LIFO
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); //3
console.log(stack.pop()); //2
console.log(stack.pop()); //1

//FILO
stack.unshift(3);
stack.unshift(2);
stack.unshift(1);

console.log(stack.shift()); //1
console.log(stack.shift()); //2
console.log(stack.shift()); //3
