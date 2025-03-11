// Call Stack is a part of JS Engine

// Web APIs
// local storage 
// timers
// DOM APIs
// fetch
// console
// location

// Callback Queue
// callback queue stores a list of functions which are waiting 
// to be executed once an aysnc operation completes.

// Event Loop
// Event Loop is a process which is responsible for executing code, collecting and processing events and executing queued tasks.

// Timers are registered into Web APIs Environment and once timer times out 
// it would be pushed to Task Queue.
// once call stack becomes empty , it would be pushed to call stack for execution

// event listeneres are registered in memory and once user interacts, it pushed into callback-queue
// and once callstack becomes empty event loop takes the function and pushes function to call stack.

// Micro Task Queue
// Micro Task Queue is responsible for executing callback of promises once they settled down.
// MTQ also handles Mutation observer once there is a DOM change through callback.
// It has a higher priority as compared to task Queue ( Callback queue ).
