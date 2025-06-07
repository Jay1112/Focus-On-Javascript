// callback
// when a funnction is passed to another function as arg is called callback function.

// document.addEventListener("click",function(e){
//     console.log("callback function")
// });

// Difference Between Arrow vs Regular function
// [1].syntax
function testReg(num1, num2){
    return num1 + num2;
}

// Arrow functions
const testArrow = (num1, num2) => num1 + num2;

// [2]. explicit return
// as mentioned in above examples

// [3]. arguments array
function normal(){
    console.log(arguments); // we can access all the passed arguments
}

const arrow = () => {
    console.log(arguments); // will throw error
}

// [4]. this keyword
const user = {
    username : 'Jay Patel',
    displayReg(){
        console.log(this.username)
    },
    displayArr : () => {
        console.log(this.username)
    }
}
user.displayArr()
user.displayReg()