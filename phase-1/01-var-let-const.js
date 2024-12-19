// Scope : Scope is a context in which variables and functions are declared and can be accessed.

// Global Scope : variables which are not defined in customizable scope. 
// Block Scope : it is defined using {}.
// function Scope : accessiblity of variable and functions within the function.

// var : var is functional scope.
// let and const : blocked scope

{
    var a = 5 ; 
}
console.log(a); // 5

{
    let b = 5 ; 
    console.log(b); // 5
}

// shadowing
let shadow = 12 ; 
{
    let shadow = 20;
    console.log(shadow)
}

// legal shadowing
var legal = 13;
{
    let legal = 16;
    console.log(legal);
}


// illegal shadowing
// let illegal = 13;
// {
//     var illegal = 16;
//     console.log(illegal); // error
// }

// let and const can not be redeclared.
// var can be redeclared.
var declare = 30;
var declare = 30;

//  you can not declare const without initialization.
// you can not reassign value to const.

// {
//     let b = 5 ; 
// }
// console.log(b); // error 

/* Hoisting */

// var, let and const are hoisted.
// but let and const are hioisted in TDZ.

// TDZ means variables are in the scope but they are not declared yet.
console.log(hoistVar); // undefined
console.log(hoistLet); // error

var hoistVar = 'var';
let hoistLet = 'let';