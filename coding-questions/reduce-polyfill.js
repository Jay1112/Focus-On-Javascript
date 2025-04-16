// Reduce Polyfill

// Polyfill : Polyfill is a our own implementation of inbuilt function in javascript.

Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue;

    for(let i = 0 ; i < this.length; i++){
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }

    return acc;
}

const arr = [1,2,3,4,5];

const answer = arr.myReduce((acc, curr)=>{
    return acc + curr;
},0);

console.log(answer)