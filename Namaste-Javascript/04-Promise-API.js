// Promise.all()
// Promise.all is a static method and it takes iterable of promises as input and returns a single promise.
// this returned promise fulfills when all input's promises fulfilled.
// and it gets rejected when any one of input's promise gets rejected.

// it waits for all promises to get finished.
// but once it gets any error from any promise, it immediately logs the error.
// but other promises continues their execution in background.

// all success : values
// if any one fails : error

const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000);
  setTimeout(() => {
    reject("P1 Fail");
  }, 3000);
});

const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("P2 Success");
//   }, 5000);
  setTimeout(() => {
    reject("P2 Fail");
  }, 1000);
});

const p3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("P3 Success");
//   }, 2000);
  setTimeout(() => {
    reject("P2 Fail");
  }, 2000);
});

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Promise.allSettled()
// Promise.allSettled is a static method and it takes iterable of promises as input and returns a single promise.
// it will wait for all promises to settle

// all success : values
// if any one fails : values with error

// for success promise => status : 'fulfilled', value : data
// for failure promise => status : 'rejected', reason : 'something went wrong'

// Promise.allSettled([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Promise.race()
// Promise.race is a static method and it takes iterable of promises as input and returns a single promise.
// it returns the result of first settled promise whether it is a success or failure.

// Promise.race([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Promise.any()
// Promise.any is a static method and it takes iterable of promises as input and returns a single promise.
// wait for first fulfilled promise
// if all promises get rejected then it returns "aggregate error" ( array of errors )

Promise.any([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });