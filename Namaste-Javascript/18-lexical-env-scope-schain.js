/* Lexical Environment */
// Lexical Environment is a data structure that stores variabels and functions
// defined in current scope along with references to all other outer scopes.
// It is known as Lexical Scope.

/* What is a Scope Chain */
// Scope Chain is a mechanism used to resolve variable references from current scope to moving outwards parent until the global
// scope is reached.

function a(){
    var x = 10;
    function b(){
        function c(){
            console.log(x);
        }
        c()
    }
    b()
}
a();