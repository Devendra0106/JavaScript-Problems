// Call: Predefined JS method, 
// - With call, an object can use a method belonging to another object.
// - takes arguments separately.
const obj1 = {
  name: "Sam",
  age: 25,
  intro: function (city) {
    return `Hello, this is ${this.name}, ${this.age} years old. Stays in ${city}`
  }
}

obj1.intro('NY');

const obj2 = {
  name: "Tom",
  age: 27,
}
obj1.intro.call(obj2, "LA");

// Apply: Similar to call, takes arguments as an array.
const obj1 = {
  name: "Sam",
  age: 25,
  intro: function (city) {
    return `Hello, this is ${this.name}, ${this.age} years old. Stays in ${city}`
  }
}
const obj2 = {
  name: "Tom",
  age: 27,
}
obj1.intro.apply(obj2, ["LA"]);
----------
let max = Math.max(5, 2, 7, 4, 9, 3, 8); // 9

let arr = [5, 2, 7, 4, 9, 3, 8]
let maxInArray = Math.max.apply(null, arr); // 9

// Bind: We can bind an object to a common function, so that the function gives different result when its need.
const obj1 = {
  name: "Sam",
  age: 25,
  intro: function (city) {
    return `Hello, this is ${this.name}, ${this.age} years old. Stays in ${city}.`
  }
}
const obj2 = {
  name: "Tom",
  age: 27,
}
const info = obj1.intro.bind(obj2);
info('NY');
---------
const obj1 = {
  name: "Sam",
  age: 25,
}

const obj2 = {
  name: "Tom",
  age: 27,
}

function intro(city) {
  return `Hello, this is ${this.name}, ${this.age} years old. Stays in ${city}.`
}

const info1 = intro.bind(obj1);
info1('NY');

const info2 = intro.bind(obj2);
info2('LA');
