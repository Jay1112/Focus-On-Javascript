// Memoize Polyfill

function memoize(fn, context){
    let cache = {};

    return function(...args){
        const argsString = JSON.stringify(args);
        let result ;
        if(cache[argsString]){
            result = cache[argsString]
        }else{
            result = fn.call(context || this, ...args);
            cache[argsString] = result;
        }
        return result;
    }
}

const calculate = (num1, num2) => {
    for(let i = 0 ; i < 100000000; i++){}
    return num1 * num2;
}

const memoizedCalculate = memoize(calculate);

console.time("1st");
memoizedCalculate(1000, 2000);
console.timeEnd("1st");

console.time("2nd");
memoizedCalculate(1000, 2000);
console.timeEnd("2nd");