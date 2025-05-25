// reduce example

let arr = [1,2,3,4];

const result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result);

// Polyfill
Array.prototype.CustomReduce = function(fn, initialValue){
    let result = initialValue;
    for(let i = 0 ; i < this.length; i++){
        result = result ? fn(result, this[i], i, this) : this[i]
    }
    return result;
}

const test = arr.CustomReduce((acc, curr) => acc + curr, 0);
console.log(test);