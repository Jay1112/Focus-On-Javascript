// Promise  => Promise is an object that represents eventual completion of async operations and its resulting value.

const promise = new Promise((resolve, reject) => {
    const result = false;
    setTimeout(() => {
        if(result){
            resolve("Promise fulfilled");
        }else{
            reject("Promise rejected!");
        } 
    }, 2000)
})

promise
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})

function openVideo(title) {
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            console.log("Video Opened");
            resolve(title);
        }, 1000);
    })
  }
  
  function startVideo(title) {
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            console.log("Video Started");
            resolve(title);
        }, 1000);
    })
  }
  
  function endVideo(title) {
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            console.log("Video Ended");
            reject(title);
        }, 1000);
    })
  }
  
  openVideo("React JS")
  .then((value) => {
    console.log(value)
    return startVideo(value);
  })
  .then((value) => {
      console.log(value)
      return endVideo(value);
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
      console.log("Error : ", error)
    })

