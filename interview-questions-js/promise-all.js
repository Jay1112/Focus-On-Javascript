// Polyfill for Promise.all()

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function MyCustomPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [],
      counter = 0;
    promises.forEach((p) => {
      p.then((res) => {
        result.push(res);
        counter++;
        if (counter === promises.length) {
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
}

// custom polyfill
MyCustomPromiseAll([
  showText("Testing Text", 2000),
  Promise.resolve("Successfully Completed"),
  Promise.reject("Failed..."),
])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

// Promise.all 
Promise.all([
  showText("Testing Text", 2000),
  Promise.resolve("Successfully Completed"),
  Promise.reject("Failed..."),
])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error : ", err);
  });
