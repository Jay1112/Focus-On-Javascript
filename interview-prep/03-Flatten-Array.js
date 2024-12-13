const arr = [1, [2, 3], [[4, 5, 6]], [[[[[10, 11, 12, 14]]]]]];

function flattenArray(arr) {
  return arr.reduce((result, currentValue) => {
    if (Array.isArray(currentValue)) {
      result = result.concat(flattenArray(currentValue));
    } else {
      result.push(currentValue);
    }
    return result;
  }, []);
}

const result = flattenArray(arr);
console.log(result);
