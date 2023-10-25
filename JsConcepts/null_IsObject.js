var bar = null;

console.log(typeof bar === "object");

//null is also consideres as object, so use below check to validate object.
console.log((bar !== null) && (typeof bar === "object"));

