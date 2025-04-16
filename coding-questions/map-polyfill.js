// Map Polyfill

// Polyfill : Polyfill is a our own implementation of inbuilt function in javascript.

Array.prototype.myMap = function(cb){
    let result = [];

    for(let i = 0; i < this.length; i++){
        const answer = cb(this[i], i, this);
        result.push(answer);
    }

    return result;
}

const arr = [1,2,3,4,5];

const answer = arr.myMap((num) => num * 2);

console.log(answer)