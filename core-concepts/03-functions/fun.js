// Function Declaration | Function Definition | Function Statement
function test(a){
    console.log("A : ", a)
}

// storing a function in variable : Function Expression
const multiply = function(a,b){
    return a * b;
}

// anonymous function -> function without name

// First Class Functions
// function can be passed as argument, can be manipulated, can be returned from another function is called First Class Functions.

// IIFE ( Immediate Invoked Function Expression )
// (function square(x){
//     console.log("X * X", x)
// })(10);