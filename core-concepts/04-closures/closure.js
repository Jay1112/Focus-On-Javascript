// Closure
// Closure is a function that references its variable in outer scope from its inner scope.

// Scope 
// scope is current context of your code. 

// Lexical Scope
// accessibility of a variable based on its location.

// Example
function makeFun(){
    var name = "Jay";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const fn = makeFun();
fn();

// why closure ?
// We can achieve encapsulation by using closure.

// Closure Scope Chain