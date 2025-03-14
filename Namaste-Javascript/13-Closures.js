// What is Closure ?
// A closure is the combination of function bundled together with references to its surrounding state(lexical environment).
// closure is created when a function is created.

// Usage : 
// 1. Module Design Pattern
// 2. Currying
// 3. Memoize
// 4. setTimeouts
// 5. managing state in async tasks
// 6. function like once 

// example
function x(){
    var a = 10;
    function y(){
        console.log(a)
    }
    a = 100;
    return y;
}

const z = x();
z(); // 100
