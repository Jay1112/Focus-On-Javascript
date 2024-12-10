function memoization(fn) {
  let cache = {};
  return function (...args) {
    const argsString = JSON.stringify([...args]);
    if (argsString in cache) {
      console.log("Returned from Cache");
      const result = cache[argsString];
      return result;
    } else {
      const result = fn.apply(this, args);
      cache[argsString] = result;
      console.log("Value Calculated");
      return result
    }
  };
}

function fib(n){
    if(n <= 1){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

const fibMemoized = memoization(fib);

// non memoization 
console.time("test");
fib(40);
console.timeEnd("test");

console.time("test2");
fib(40);
console.timeEnd("test2");

// memoization
console.time("test");
fibMemoized(40);
console.timeEnd("test");

console.time("test2");
fibMemoized(40);
console.timeEnd("test2");
