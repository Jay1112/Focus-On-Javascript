
/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  const calls = [];

  let originalMethod = obj[methodName];
  if(typeof originalMethod !== 'function'){
    throw new Error("error")
  }

  obj[methodName] = function(...args){
    calls.push(args);
    return originalMethod.apply(this, args);
  }

  return { calls }
}

const obj = {
   data: 1, 
   increment(num) {
      this.data += num
   }
}
const spy = spyOn(obj, 'increment')
obj.increment(1)
console.log(obj.data) // 2
obj.increment(2)
console.log(obj.data) // 4
console.log(spy.calls)