// Filter Polyfill

// Polyfill : Polyfill is a our own implementation of inbuilt function in javascript.

Array.prototype.myFilter = function(cb){
    let result = [];

    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            result.push(this[i]);
        }
    }

    return result;
}

const arr = [1,2,3,4,5];

const answer = arr.myFilter((num) => num > 3);

console.log(answer)