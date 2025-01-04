// dynamic property
const property = 'firstName' ; 
const name = 'Jay Patel'

const user = {
    [property] : name,
    age : 25,
}

console.log(user);

// go through all properties
for(const key in user){
    console.log(key," : ",user[key]);
}

// multiply by 2 to all numeric properties
let nums = {
    a: 100,
    b: 200,
    title : 'numsber'
}

function multiplyBy2(obj){
    for(const key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyBy2(nums);
console.log(nums);

// really good question (object as a key to another object)
const a = {};
const b = { key : 'b' }
const c = { key : 'c' }

a[b] = 123; // this would be equivalent to a['[object object]'] = 123
a[c] = 456; // whhen this line runs it would override upper key's value to 456

console.log(a[b]); // 456

// when you use object as a key in another object object would be converted as [object object] and then value assign to it.

/* string spreading */
const str = "Javascript"
console.log([...str])

// stringify with specific keys
const doctor = {
    name : 'dr.alok',
    age : 45,
    level : 'Expert Doctor'
}

// second arg is list of keys which will be part of JSON
console.log(JSON.stringify(doctor,["name","level"]))

// shallow copy and deep copy

// there are 3 ways by which we can clone the object

const customer = {
    fullname : {
        firstname : 'jay',
        lastname : 'patel'
    },
    age : 24
}

// 1st
// const newCustomer = Object.assign(customer); // Object.assign can not do deep copy of nested objects
// newCustomer.fullname.firstname = 'john'
// console.log(newCustomer, customer); 

// 2nd
// const newCustomer2 = JSON.parse(JSON.stringify(customer))
// newCustomer2.fullname.firstname = 'john'
// console.log(newCustomer2, customer); 

// 3rd
// const newCustomer3 = {...customer} // spread operator can not do deep copy of nested objects 
// newCustomer3.fullname.firstname = 'john'
// console.log(newCustomer3, customer); 