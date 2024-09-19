const arr = [
    {
        id : 15,
        name : 'abc'
    },
    {
        id : 20,
        name : 'def'
    },
    {
        id : 30,
        name : 'ghi'
    },
    {
        id : 40,
        name : 'jkl'
    },
    {
        id : 15,
        name : 'mno'
    }
];

Array.prototype.myReduce = function(cb, initial){
    let result = initial ; 
    for(let i = 0 ; i < this.length; i++){
        result = result ? cb(result,this[i],i,this) : this[i];
    }

    return result;
}

// final array
const final = arr.myReduce((obj,item) => {
    if(obj.hasOwnProperty(item.id)){
        obj[item.id] = obj[item.id] + 1;
    }else{
        obj[item.id] = 1;
    }
    return obj;
},{});

console.log(final);