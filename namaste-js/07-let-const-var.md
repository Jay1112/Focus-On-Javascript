- let and const declarations are hoisted.

- in Hoisting, there are in TDZ for time being.

- before the execution phase, let and const variables are stored in TDZ with undefined. but they are not accessible before their declarations.

ex:

console.log(b); // undefined
console.log(a); // ReferenceError
let a = 100;
var b = 20 ;

- var attached with the global object but let and const are not attached with the global object. same with "this".
- var can be declared but let and const are not.

ex: 

var b = 10; 
let a = 10;
var b = 10 ; // fine
let a = 20 ; // error
