// Promise all with concurrency Limit
function promiseAllWithConcurrencyLimit(functions, limit) {
  if (functions.length === 0) return Promise.resolve([]);

  let concurrencyLimit = Math.min(functions.length, limit);
  const results = new Array(concurrencyLimit);
  let resolvedPromises = 0;
  let currIndex = 0;

  return new Promise((resolve, reject) => {
    async function executeNextPromise() {
      const index = currIndex++;
      try {
        const data = await functions[index]();
        resolvedPromises++;

        results[index] = data;

        if (resolvedPromises === functions.length) {
          resolve(results);
        }

        if (currIndex < functions.length) {
          executeNextPromise();
        }
      } catch (error) {
        reject(error);
      }
    }

    for (let i = 0; i < concurrencyLimit; i++) {
      executeNextPromise();
    }
  });
}

module.exports = promiseAllWithConcurrencyLimit;