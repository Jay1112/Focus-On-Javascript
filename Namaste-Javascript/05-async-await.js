// what is async
// async is a keyword which is used to create async functions.
// async function always returns promise
// if async function returns a value then it wraps that value with promise and return it.

// what is await
// await is a keyword which is used to hold async action to finish before continuing the function.
// await is also used inside async function.

// async and await is a combo which is used to handle async tasks.

// in normal promise, JS Engine would not stop for promise to be resolved.
// while using async and await, JS Engine would wait for promise to be settle down and then it moves further.

// we can do error handling in async and await via using try and catch block.

// const p = new Promise(function (resolve, reject) {
//   setTimeout(()=>{
//     resolve("P Success");
//   },10000)
// });

// const q = new Promise(function (resolve, reject) {
//   setTimeout(()=>{
//     resolve("Q Success");
//   },5000)
// });

async function myFunction() {
  const p = new Promise(function (resolve, reject) {
  setTimeout(()=>{
    resolve("P Success");
  },10000)
});

const q = new Promise(function (resolve, reject) {
  setTimeout(()=>{
    resolve("Q Success");
  },5000)
});

  const result = await p;
  console.log("Namaste Javascript");
  console.log(result);

  const result2 = await q;
  console.log("Namaste Javascript 2");
  console.log(result2);
}

myFunction();

function getData() {
  return p;
}

getData().then((res) => {
  console.log(res);
});
