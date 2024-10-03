// function declaration & definition

function square(num){ // params
    return num * num ;
}

const ans = square(6); // arguments

// function expression
// anonymous function : a function without any name

const test = function(){
    console.log("Test Message...");
}

// First Class Functions
// when functions are treated as any other variable in language, we can say they are first class functions.
// example : 
    // when function is stored in variable
    // when function can be passed as an argument to the function
    // when function can be returned from a function.

const storeFun = function firstClassFunction(){
    console.log("First class function...");
}

function declare(fn){
    return fn;
}

declare(storeFun);

// IIFE : Immediately Invoked Function Expression,
(function display(){
    console.log("Display function : ");
})();

// Hoisting

console.log(x); // undefined
var x = 21 ; 

testing();

function testing(){
    console.log(x); // undefined
    var x = 10;
}

// Spread vs Rest Operators
function factorial(...args){ // Rest Operators
    return 1;
}

const nums = [5,6,7,3,35,4]

factorial(...nums); // Spread Operator

// Rest Operator must be declared at the end otherwise it would throw an error.

function restTesting(x,a,b,...remain){
    console.log(a,b,remain);
}
restTesting(12,43,131,4545,788,13132,231);

// callback function is a funciton which is passed as an argument to another function.