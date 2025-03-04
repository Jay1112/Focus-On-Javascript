// setTuimeout => executes callback by given minimum guaranteed delayed
// setTimeout and setInterval are web APIs. they are not part of Javascript.
// It is used to execute particular function after specified amount of time has passed.

console.log("Start")

setTimeout(()=>{
    console.log("Set Timeout Function")
},5000)

console.log("End")

/*

in above example,

setTimeout timer is registered in web API's environment.
once timer completed, it would be pushed in Task Queue.

once, call stack becomes empty, the callback would be pushed to call stack and executed by context.

*/