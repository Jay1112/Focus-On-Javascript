function flattenObject(obj, parent) {
  let finalObj = {};

  for (let key in obj) {
    const newParent = parent + key; 
    const value = obj[key];
    if (typeof value === "object") {
      const result = flattenObject(value, newParent + ".");
      finalObj = { ...finalObj, ...result };
    } else {
      finalObj[newParent] = value;
    }
  }

  return finalObj;
}

const obj = {
  A: 12,
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const result = flattenObject(obj, "");
console.log(result);
