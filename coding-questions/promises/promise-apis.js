// Promise Combinators

function openVideo(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Video Opened");
      resolve(title);
    }, 1000);
  });
}

function startVideo(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Video Started");
      resolve(title);
    }, 2000);
  });
}

function endVideo(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Video Ended");
      resolve(title);
    }, 3000);
  });
}

Promise.all([
  openVideo("React Js 1"),
  startVideo("React Js 2"),
  endVideo("React Js 3")
])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Error : ",error);
  });
