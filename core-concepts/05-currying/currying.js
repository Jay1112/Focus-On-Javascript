// Why should we use currying ?
// - to develop Higher order functions
// - less prones to errors

// Que 1 : Infinite Currying
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

console.log(sum(2)(5)(6)(8)(100)());

// Que 2
function evaluate(operation) {
  return function first(a) {
    return function second(b) {
      if (b) {
        if (operation === "add") return first(a + b);
        else if (operation === "sub") return first(a - b);
        else if (operation === "mul") return first(a * b);
        else if (operation === "div") return first(a / b);
        else return "Invalid Operator";
      }
      return a;
    };
  };
}

console.log(evaluate("add")(5)(6)());
console.log(evaluate("sub")(5)(6)());
console.log(evaluate("mul")(5)(6)());
console.log(evaluate("div")(36)(6)());

// Ques : 3 => DOM Manipulation
function updateContent(id) {
  return function update(content) {
    document.querySelector(`#${id}`).textContent = content;
  };
}

// converty any function to currying function
function curry(func) {
    const totalArgs = func.length;
  return function curried(...args) {
    if (args.length === totalArgs) {
      return func(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}

const summ = (a,b,c,d) => a + b + c + d;
const curriedSum = curry(summ);
console.log(curriedSum(1)(2)(4)(5))