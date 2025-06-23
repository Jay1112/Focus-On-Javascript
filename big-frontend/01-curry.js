function curry(fn) {
  return function curried(...args){
    if(fn.length <= args.length){
      return fn(...args);
    }else{
      return function(...next){
        return curried(...args, ...next);
      }
    }
  }
}

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3) )