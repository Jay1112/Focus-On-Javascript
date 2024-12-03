## Hoisting

- Hoisting in Javascript means you can access variables and functions before their declaration.

=> var follows hoisting 

console.log(b); // undefined 
var b = 10;

=> let & const

- in JS, let and const are hoisted but they work differently.

- when memory phase start, let and const variables are pushed in Temporal Dead Zone (TDZ).
- during execution phase, let and const variables are assigned to the value and come out of TDZ.
- if there is no value assigned then they are undefined.

## What is TDZ 

- TDZ is period between declaration of a variable and assigned a value to variable.

console.log(a); // ReferenceError : you can not access a before initialization
let a = 10;

=> functions

console.log(display());
function display(){
    console.log("Hoisting in Javascript");
}
