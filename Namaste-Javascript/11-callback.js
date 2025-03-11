// Callback
// when a function is passed to another function as argument, it is called callback.

// callback gives us capacity to handle async tasks.

// Blocks main thread while doing 

function test(fn){
    fn();
}
test(function test(){
    console.log("test")
});

// Event listners are very in terms of usage because we have to store them in memory because 
// they can be used at any time by some event, it is necessary to remove them for better performance.

// When we use callbacks to handle async task, they can create a problem called "Callback Hell".