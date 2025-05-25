// map example

let arr = [1,2,3,4];

const result = arr.map((item) => item % 2);
console.log(result);

// Polyfill
Array.prototype.CustomMap = function(fn){
    let result = [];
    for(let i = 0 ; i < this.length; i++){
        result.push(fn(this[i], i, this));
    }
    return result;
}

const test = arr.CustomMap((item) => item * 2);
console.log(test);