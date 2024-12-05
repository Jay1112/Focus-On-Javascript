## What is Lexical Environment

- Lexical Env in Javascript is a data structure which stores all the varibales and function defined 
in the current scope and all the references to the outer scope.

- Lexical Env is local memory along with its parent lexical environment.
- Lexical means in hierarchy, in sequence.

- Lexical Env is created whenever Execution contect created.

## Scope 

- Scope determines the accessibility of variables, objects, and functions from different parts of the code.

## Scope chain

- chaining of Lexical Environment calls a Scope Chain.

ex : 

function a(){
    c();
    function c(){
        console.log(b); // 10
    }
}

var b = 10 ; 
a();
