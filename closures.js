function outer(a) {
    return function inner(b){
        return a + b;
    }
}

let sum = outer(3);
sum(2);
