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

// Difference Between closure and scope
// when we use a function inside another function then the inner function is treated as closure
// and it has refernces to outer env which can be used later.
// closure has inner scope, outer scope and global scope as well.

// scope means which variables and objects can be accessed in a section of a code.
// scope : function, global, blocked, module scope