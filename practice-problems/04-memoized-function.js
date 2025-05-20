function memoize(fn) {
    let cache = {};
    return function (...args) {
        const json = JSON.stringify(args);
        if (cache.hasOwnProperty(json)) {
            return cache[json];
        } else {
            const result = fn(...args);
            cache[json] = result;
            return result;
        }
    }
}

memoize();
module.exports = memoize;