// what is Higher order function ?
// A function which takes another function as an argument or returns a function as result is called HOF.

function x() {
  console.log("function x");
}

function y(x) {
  x();
  console.log("function y");
}
// in above example, y is HOF as it takes x as an argument while x is a callback function

// Functional Programming using Higher order Functions
function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

function diameter(radius){
    return 2 * radius;
}

function calculate(arr, logic){
    let output = [];
    for( const num of arr){
        output.push(logic(num));
    }
    return output;
}

const arr = [2,4,5,9];

console.log(calculate(arr, area))
console.log(calculate(arr, diameter))
console.log(calculate(arr, circumference))