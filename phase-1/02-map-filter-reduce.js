// map

const arr = [1, 2, 3, 4, 5];
const mapArr = arr.map((item) => item * 2);
console.log(mapArr);

// filter

const filterArr = arr.filter((item) => item % 2);
console.log(filterArr);

// reduce

const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

/* map polyfill */
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

const customMap = arr.myMap((item) => item * 2);
console.log(customMap);

/* filter polyfill */
Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const customfilter = arr.myFilter((item) => item % 2);
console.log(customfilter);

/* reduce polyfill */
Array.prototype.customReduce = function (cb, acc) {
  let accumulator = acc;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator !== undefined ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const reduceSum = arr.customReduce((acc, curr) => acc + curr, 0);
console.log(reduceSum);
