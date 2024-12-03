## How Functions work in Javascript

var x = 1 ;

a();
b();

function a(){
    var x = 10 ; 
    console.log(x);
}

function b(){
    var x = 100 ; 
    console.log(x);
}

console.log(x);

## output 

10 
100
1