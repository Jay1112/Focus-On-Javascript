const arr = [1,2,3,4,5];

Array.prototype.myMap = function(cb){
    let result = [];

    for(let i = 0 ; i < this.length; i++){
        result.push(cb(this[i],i,this));
    }

    return result;
}

// final array
const final = arr.myMap((item) => item * 4);

console.log(final);