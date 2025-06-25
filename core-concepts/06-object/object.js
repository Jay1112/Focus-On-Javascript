// Object is a store where we store key value paired data

// Que 1
const func = (function(a){
    delete a;
    return a;
})(5);

console.log(func)

// Dynamic Property

const property = 'firstname'
const value = 'jay';

const obj = {
    [property] : value
}
console.log(obj)

// Ques - 3

const obj2 = {
    a : 1,
    b : 2,
    a : 3
}
console.log(obj2)

// Que - 4
const a = {};
const b = { key : 'a' };
const c = { key : 'b' };

a[b] = 123;
a[c] = 456;

console.log(a[b])

// Que 5 
const test = {
    username : 'testing',
    level : 29,
    health : 402
}

const data = JSON.stringify(test, ["level", "health"]);
console.log(data)

// Que 6
const shape = {
    radius : 5,
    diameter(){
        return 2 * Math.PI * this.radius;
    },
    perimeter : () => 2 * Math.PI * this.radius
}

console.log(shape.diameter())
console.log(shape.perimeter())

// Que 7
const ref1 = {
    message : 'hey'
}

const ref2 = ref1;
ref2.message = 'hello'
console.log(ref1.message)

// Que 8
console.log({ a : '1' } == { a : '1'}); // false
console.log({ a : '1' } === { a : '1'}); // false

// Que 9
let person =  { name : 'john' }
const members = [person];
person = null;
console.log(members)