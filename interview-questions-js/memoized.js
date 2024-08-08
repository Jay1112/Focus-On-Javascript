function functionCaching(fn, context){
    let res = {} ;
    return function(...args){
        argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

function fibanacci(n){
    if(n <= 1){
        return 1;
    }

    return fibanacci(n-2) + fibanacci(n-1);
}


let n = 35;

console.time("time");
const ans = fibanacci(n);
console.log(ans)
console.timeEnd("time");

const fibanacciCached = functionCaching(fibanacci);

console.time("time");
const ans2 = fibanacciCached(n);
console.log(ans2)
console.timeEnd("time");

console.time("time");
const ans3 = fibanacciCached(n);
console.log(ans3)
console.timeEnd("time");