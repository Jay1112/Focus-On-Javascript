function promiseRace(promises) {
    if (promises.length === 0) return "timeout";

    return new Promise((resolve, reject) => {
        for (const p of promises) {
           Promise.resolve(p).then(resolve, reject)
        }
    });
}

module.exports = promiseRace