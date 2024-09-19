const arr = [
    {
        id : 1,
        name : 'abc'
    },
    {
        id : 2,
        name : 'def'
    },
    {
        id : 3,
        name : 'ghi'
    },
    {
        id : 4,
        name : 'jkl'
    },
    {
        id : 5,
        name : 'mno'
    }
];

Array.prototype.myFilter = function(cb){
    let result = [];

    for(let i = 0 ; i < this.length; i++){
        if(cb(this[i],i,this)){
            result.push(this[i]);
        }
    }

    return result;
}

// final array
const final = arr.myFilter((item) => item.id % 2 === 1);

console.log(final);