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

// Run only once
function runOnce(fn){
    let isRun = false;
    return function(...args){
        if(isRun) return ;
        isRun = true;
        return fn(...args);
    }
}

const add = (a, b) => {
    return a + b;
}

console.log(add(5,6))
console.log(add(4,2))

const addOnce = runOnce(add);

console.log(addOnce(5,6))
console.log(addOnce(4,2))