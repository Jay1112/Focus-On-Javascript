// Polyfill for map
Array.prototype.customMap = function (fn) {
  const transformArr = [];
  this.forEach((item,index) => {
    const result = fn(item,index,this);
    transformArr.push(result);
  });
  return transformArr;
};

const arr = [1, 2, 3];
console.log(arr.customMap((item) => item * 2));
