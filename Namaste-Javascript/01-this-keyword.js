/* this keyword */
// "use strict"; 

// this in global space
console.log("this in Global Space")
console.log(this) // global Object, Browser => window and Node Js => Global

// this inside function
function x(){
    // here this value depends on strict and non-strict mode
    // strict mode : undefined | non-strict mode : globalObject
    console.log(this); // here this object is different from outsider this object
}
x();

// this keyword also behaves differently in strict and non-strict mode

/* this keyword substitution */
// In non strict mode
// if the value of this keyword is null or undefined
// then this keyword is replaced with globalObject

// this inside a object's method
const obj = {
    name : 'Jay',
    display : function(){
        console.log(this.name);
    }
}
obj.display();

// call, apply and bind ( sharing methods )
const obj2 = {
    name : 'John DOE'
}
obj.display.call(obj2)

// this inside in arrow function