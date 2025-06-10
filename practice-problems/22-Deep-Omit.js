function clone(obj, key) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
            result.push(clone(item, key));
        }
        return result;
    }

    const cloned = {};
    const keys = Object.keys(obj);
    for (const item of keys) {
        if (item === key) continue;
        cloned[item] = clone(obj[item], key);
    }
    return cloned;
}

function deepOmit(obj, keysToOmit) {
    let result = clone(obj, null);
    for (const key of keysToOmit) {
        result = clone(result, key);
    }
    return result;
}

module.exports = deepOmit