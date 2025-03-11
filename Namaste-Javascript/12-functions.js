// function statement ( function declaration )
// function statement always requires a function name
function fun1(){
    console.log("Called...")
}

// function expression
var fun2 = function(){
    console.log("Called...2")
}

// main difference between function statement and function expression is hoisting.

// anonymous function
// function without a name is anonymous function
// it is assigned to the variable

// Named function expression
var fun3 = function test(){
    console.log("test function...")
}
test(); // this will give u an error


// params vs arguments
function design(params){
    // testing
}
design('arguments');

// First Class Functions ( First Class Citizens )
// Ability to use functions as values, to pass funciton as an argument and to return a funciton from another function is called First Class Functions.

// Arrow Functions 
const component = () => {

}