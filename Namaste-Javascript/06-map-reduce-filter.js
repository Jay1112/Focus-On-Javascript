const users = [
  { firstname: "Amit", lastname: "Sharma", age: 28 },
  { firstname: "Priya", lastname: "Verma", age: 24 },
  { firstname: "Rahul", lastname: "Patel", age: 30 },
  { firstname: "Neha", lastname: "Singh", age: 26 },
  { firstname: "Vikram", lastname: "Rao", age: 32 },
];

// map is an array method, takes an array as input and returns a new array with transformed values.
// const fullNameList = users.map((item) => item.firstname + " " + item.lastname);
// console.log(fullNameList);

// filter is an array method, takes an array as an input and returns a new filtered array based on applied parameters.
// const filteredUsers = users.filter((item) => item.age > 25);
// console.log(filteredUsers);

// reduce is an array method, takes array elements and returns a single value as result;
// const avgAge = users.reduce((acc, curr) => {
//   return acc + curr.age;
// }, 0);
// console.log(Math.floor(avgAge / users.length));

// Polyfills
Array.prototype.customMap = function(callback){
    let result = [];
    for(let index = 0 ; index < this.length; index++){
        const answer = callback(this[index]);
        result.push(answer);
    }
    return result;
}

Array.prototype.customFilter = function(callback){
    let result = [];
    for(let index = 0 ; index < this.length; index++){
        const answer = callback(this[index]);
        if(answer){
            result.push(this[index]);
        }
    }
    return result;
}

Array.prototype.customReduce = function(callback, initial){
    let result = initial;
    for(let index = 0 ; index < this.length; index++){
        result = callback(result,this[index]);
    }
    return result;
}

const fullNameList2 = users.customMap((item) => item.firstname + " " + item.lastname);
console.log(fullNameList2)

const filteredUsers2 = users.customFilter((item) => item.age > 25);
console.log(filteredUsers2);

const avgAge2 = users.customReduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
  console.log(Math.floor(avgAge2 / users.length));