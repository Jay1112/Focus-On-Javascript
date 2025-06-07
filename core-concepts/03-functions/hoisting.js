// function hoisted completly

var x = 21;

function test(){
    console.log(x); // undefined
    var x = 40;
}

test();

// Params vs Arguments
function add(a, b){ // Params
    return a + b;
}

add(3,5); // Arguments