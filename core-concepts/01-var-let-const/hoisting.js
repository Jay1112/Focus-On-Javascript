// Hoisting 

// when we are trying to access a variable or function before its declaration called Hoisting.

// var, let and const are hoisted.
// but let and const are in TDZ.

console.log(a); // undefined
var count = 1;

console.log(b); // ReferenceError
let b = 10; // TDZ

// Temporal Dead Zone
// TDZ is the zone in which let and const variables are temp inaccessible before their actual declaration.

function test(){
    console.log(a,b,c); // a : undefined and b & c : ReferenceError

    var a = 10;
    let b = 20;
    const c = 30;
}

test();