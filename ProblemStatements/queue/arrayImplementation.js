let q = [];

//FIFO
q.push(1);
q.push(2);
q.push(3);

console.log(q.shift());
console.log(q.shift());
console.log(q.shift());

//LILO
q.unshift(1);
q.unshift(2);
q.unshift(3);

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
