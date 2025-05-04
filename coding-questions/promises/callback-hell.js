// when we write callback inside a callback and so on it will create callback hell problem.

// to solve the problem of callback hell, we will use promises.

function openVideo(title, cb) {
  setTimeout(() => {
    console.log("Video Opened");
    cb(title);
  }, 1000);
}

function startVideo(title, cb) {
  setTimeout(() => {
    console.log("Video Started");
    cb(title);
  }, 1000);
}

function endVideo(title, cb) {
  setTimeout(() => {
    console.log("Video Ended");
    cb(title);
  }, 1000);
}

openVideo("React JS", (title) => {
  console.log("Title : ", title);
  startVideo(title, (title) => {
    console.log("Title : ", title);
    endVideo(title, (title) => {
      console.log("Title : ", title);
    });
  });
});
