function memoize(fn, context){
    let cache = {};

    return function(...args){
        const argString = JSON.stringify(args);
        if(cache.hasOwnProperty(argString)){
            return cache[argString];
        }else{
            const result = fn.apply(context || this, [...args]);
            cache[argString] = result;
            return result; 
        }
    }
}

function calculate(n){
    for(let i = 0; i < 100000000; i++){}
    return n * n
}

console.time("first");
console.log(calculate(15));
console.timeEnd("first");

console.time("second");
console.log(calculate(15));
console.timeEnd("second");

console.time("fifth");
console.log(calculate(15));
console.timeEnd("fifth");

const cachedCalculate = memoize(calculate);

console.time("third");
console.log(cachedCalculate(15));
console.timeEnd("third");

console.time("fourth");
console.log(cachedCalculate(15));
console.timeEnd("fourth");

console.time("sixth");
console.log(cachedCalculate(15));
console.timeEnd("sixth");