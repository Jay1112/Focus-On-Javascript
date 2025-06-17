// Write a function which create operator function based on some base
function createBase(base){
    return function(num){
        return num + base;
    }
}

const addSix = createBase(6);
console.log(addSix(7));
console.log(addSix(10));

for(var i = 0 ; i < 5; i++){
    function inner(x){
        setTimeout(() => {
            console.log(x)
        }, x * 1000)
    }
    inner(i);
}

// What is Module Pattern ?
