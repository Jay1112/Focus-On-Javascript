// Closure is a combination of functions that bundleded together with references to its surrounding environment.

//  Question : 1
let count = 0;
(function () {
  if (count == 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();

// Question : 2 : add six function
function createBase(base) {
  function add(num) {
    return num + base;
  }
  return add;
}

const addSix = createBase(6);
const addSix1 = addSix(10);
console.log(addSix1);

const addFour = createBase(4);
const addFour1 = addFour(10);
console.log(addFour1);

// Question : 3 Optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function findSquare(index) {
    console.log(a[index]);
  };
}

const squareFn = find();

console.time("first");
squareFn(6);
console.timeEnd("first");

console.time("second");
squareFn(20);
console.timeEnd("second");

// Question : 4 : setTimeout

function runningTimer() {
  for (var iterator = 0; iterator <= 5; iterator++) {
    function test(time) {
      setTimeout(function () {
        console.log(time);
      }, time * 1000);
    }
    test(iterator);
  }
}
runningTimer();

// Question : 5 : use Closure for private counter

function Counter(init) {
  var counter = init;

  function add(num) {
    counter = counter + num;
  }

  function getValue() {
    return `Counter : ${counter}`;
  }

  return {
    add,
    getValue,
  };
}

const c = Counter(5);
c.add(4);
c.add(3);
console.log(c.getValue());

// Question : 6 => Module Pattern

const Module = (function () {
  function privateMethod() {
    console.log("Private");
  }

  return {
    publicMethod: function () {
      console.log("public");
      privateMethod();
    },
  };
})();

Module.publicMethod();

// Question : 7 => call only once
function callOnlyOnce(fn) {
  let called = false;
  return function () {
    if (called) {
      console.log("Function is already called...");
    } else {
      fn();
      called = !called;
    }
  };
}

function winning() {
  console.log("I won the 1M Lottery");
}

const winningOnce = callOnlyOnce(winning);
winningOnce();
winningOnce();
winningOnce();
winningOnce();
winningOnce();

// Question : 8 => call only once Polyfill

function once(fn, context) {
  let ran;

  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }

    return ran;
  };
}

const hello = once((a, b) => a + b);

const result2 = hello(3, 4);
const result1 = hello(1, 2);
console.log("Result 1 : ", result1);
console.log("Result 2 : ", result2);

// Question : 9 Memoize Function

function memoize(fn) {
  let cache = {};
  return function (...args) {
    const argString = JSON.stringify([...args]);
    if (argString in cache) {
      return cache[argString];
    }
    const result = fn(...args);
    cache[argString] = result;
    return result;
  };
}

function fib(n){
    if(n <= 1){
        return n;
    }

    return fib(n-1) + fib(n-2);
}

console.time('fib');
fib(30);
console.timeEnd('fib');
console.time('fib');
fib(30);
console.timeEnd('fib');

const memoFib = memoize(fib);
console.time('fib-optimized');
memoFib(30);
console.timeEnd('fib-optimized');
console.time('fib-optimized');
memoFib(30);
console.timeEnd('fib-optimized');

// Question : 10 [ difference between closure and scope ]

// Closure :
// when you create a function inside another function, inner function is a closure.
// we can use outer function's variable in later time in inner function.
// scope defines which variables you can access 