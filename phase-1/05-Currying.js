// currying : we can transform a function with multiple arguments into a sequence of nested functions.

// 1

function f(a){
    return function(b){
        console.log(a,b);
    }
}

f(5)(6);

// 2

function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(sum(1)(3)(5))

// 3 

function math(operation){
    return function(a){
        return function(b){
            if(operation == "add"){
                return a + b;
            }
            else if(operation == "sub"){
                return a - b;
            }
            else if(operation == "mul"){
                return a * b;
            }
           else{
                return a / b;
            }
        }
    }
}

console.log(math("add")(30)(4));
console.log(math("sub")(30)(4));
console.log(math("mul")(30)(4));
console.log(math("divide")(30)(4));

// Infinite Currying

function sumInfinite(a){
    return function(b){
        if(b){
            return sumInfinite(a + b);
        }
        return a;
    }

}

console.log(sumInfinite(1)(2)(3)(4)())

// currying vs Partial Application
function currying(a){
    return function(b){
        return function(c){
            return a + b + c ;
        }
    }
}

console.log(currying(4)(5)(6));

function partial(a){
    return function(b,c){
        return a + b + c;
    }
}

const preAdd = partial(10);
console.log(preAdd(2,30));

// DOM manipulation using currying
// function updateContent(classifier){
//     return function(content){
//         if(window && document){
//             document.querySelector(classifier)?.innerText = content;
//         }
//     }
// }

// const updateHeaderText = updateContent("header");
// updateContent('This is  currying updated COntent');

// Genric Function currying transformer
function curry(func){
    return function curryingFunction(...args){
        if(args.length >= func.length){
            return func(...args);
        }else{
            return function(...next){
                return curryingFunction(...args, ...next);
            }
        }
    }
}

const fourSum = (a,b,c,d) => a + b + c + d;
const fourSumCurry = curry(fourSum);

console.log(fourSumCurry(2)(3)(5)(4))