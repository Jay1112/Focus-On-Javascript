// let and const declarations are hoisted.
// let and const are in temporal dead zone while they are hoisted.

// Temporal Dead Zone (TDZ)
// TDZ is the time zone since let and const are hoisted till they are initialized.

// when you try to access a variable in TDZ it gives you an ReferenceError.

const a ; // Syntax Error
const b =100;
b  = 1000; // Type Error