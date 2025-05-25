// filter example

let arr = [1,2,3,4];

const result = arr.filter((item) => item % 2);
console.log(result);

// Polyfill
Array.prototype.CustomFilter = function(fn){
    let result = [];
    for(let i = 0 ; i < this.length; i++){
        if(fn(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

const test = arr.CustomFilter((item) => item % 2);
console.log(test);