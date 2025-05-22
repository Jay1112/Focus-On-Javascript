function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        let newArr = [];
        for (const item of obj) {
            newArr.push(deepClone(item));
        }
        return newArr;
    }

    let clone = {};
    for (const key of Object.keys(obj)) {
        const value = obj[key];
        clone[key] = deepClone(value);
    }

    return clone;
}

//For the purpose of user debugging.
deepClone({ a: { b: { c: 3 } } });

module.exports = deepClone;