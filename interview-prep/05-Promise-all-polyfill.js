const dummyAPI = (time) => {
  return new Promise((resolve, reject) => {
    if (time === 2000) {
      reject("Error something...");
      return;
    }
    setTimeout(() => {
      console.log("INSRTED...");
      resolve(time);
    }, time);
  });
};

const tasksArray = [dummyAPI(1000), dummyAPI(2000), dummyAPI(5000)];

function PromiseAllPolyfill(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let success = 0;

    promises.forEach((promise, index) => {
      promise
        .then((data) => {
          result[index] = data;
          success++;

          if (success === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

PromiseAllPolyfill(tasksArray)
  .then((data) => {
    console.log("Resolved : ", data);
  })
  .catch((error) => {
    console.log("Rejected : ", error);
  });
