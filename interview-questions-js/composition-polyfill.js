// Composition and Pipe Polyfills

function addTwo(a){
    return a + 2 ;
}

function multiplyByFive(a){
    return a * 5 ;
}

function subtractByThree(a){
    return a - 3;
}

function compose(...functions){
    return (args) => {
        return functions.reduceRight((arg,fn)=>fn(arg),args);
    }
}

function pipe(...functions){
    return (args) => {
        return functions.reduce((arg,fn)=>fn(arg),args);
    }
}

const evaluate = compose(subtractByThree,multiplyByFive,addTwo);
const evaluatefromLeft = pipe(subtractByThree,multiplyByFive,addTwo);

console.log(evaluate(4));
console.log(evaluatefromLeft(4));