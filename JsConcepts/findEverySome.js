let inpArr = ["sam", "tom", "ken"];

//Returns a single element which passes the condition.
let res = inpArr.find((n) => n === "tom");

//Returns index of element which passes the condition.
res = inpArr.findIndex((n) => n === "tom");

//Returns true if all elements in arr passes the condition.
res = inpArr.every((n) => n.length === 3);

//Returns true if atleast a element in the arr passes the condition.
res = inpArr.some((n) => n.endsWith("n"));

console.log(res);
