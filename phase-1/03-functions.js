// 1 :  what is function declaration ?

function display() {
  console.log("this is function declaration");
}

// this is also called function definition and function statement.

// 2 : what is function expression

const test = (function () {
  return "i am function expression";
})(
  // function which is assigned to the variable is called anonymous function because it does not have a name

  // 3 : what is First Class function

  // a function which is treated as a variable is called a first class function.

  // a function can be assigned to the variable
  // a function can be passed to the function as a argument
  // a function can be returned from a function as a value

  // 4 : what is IIFE

  // IIFE means Immediate Invoked Function Expression
  (function () {
    console.log("IIFE executed!");
  })()
);

// output based question 
for(let i = 1 ; i <= 5; i++){
    setTimeout(()=>{
        console.log("Let Time : ", i)
    }, i  * 1000)
}

for(var i = 1 ; i <= 5; i++){
    setTimeout(()=>{
        console.log("Var Time : ", i)
    }, i  * 1000)
}

// arguments vs params

// params are those values which are passed at a time of function call
// arguments are those values which are a part of function denition.

const arr = [2,3,4,5]
function concept(...nums){ // rest operator
    console.log("testing....");
}

concept(...arr); // spread operator

function milestone(a, ...nums, x,y){ // error because we can not use variables after rest operator
    console.log(x,y)
}
milestone(5,6,7,3);

// callback function
function child(){
    console.log("child func")
}
function parent(fn){
    fn();
}

parent(child); // child is callback function

// Arrow Functions

const arrow = (num) => num % 2;

// diff between normal and arrow

// 1. syntax 
// 2. Implicit return keyword
// 3. Arguments in Arrow function

function arrowV1(){
    console.log(arguments)
}

arrowV1(1,3,2); // default arguments in function

const arrow2 = () => {
    console.log(arguments)
}

arrowV2(1,3,2); // there is a nothing like arguments in arrow function

// 4. this keyword
const obj = {
    name : 'Jay Patel',
    display : () => {
        console.log(this.name)
    },
    displayV2 : function(){
        console.log(this.name)
    }
}

obj.display(); // undefined
obj.displayV2();  // Jay Patel
