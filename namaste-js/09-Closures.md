## Closure

- A Closure is a combination of function bundled together with references to its
surrounding state ( Lexical Environment) .

-  closures are created every time a function is created, at function creation time.

- when a function returns a function, it return function with its lexical environment.


ex:

function x(){
    var a = 7 ;
    function y(){
        console.log(a)
    }
    return y
}

const z = x();
z(); // 7

 - - - - - - -- -  -- - - - - 


function x(){
    var a = 7 ;
    function y(){
        console.log(a)
    }
    a = 100;
    return y
}

const z = x();
z(); // 100

 - - - - - - -- -  -- - - - - 

- Uses : 
    1. Module Designing
    2. Currying in JS
    3. Function like Once
    4. Memoization
    5. maintaing state in async world
    6. setTimeouts
     