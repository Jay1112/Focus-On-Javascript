## How Javascript code is executed

- There are mainly 2 phases in whch js code gets executed

[1]. Memory Phase ( Variable Environment )

- this is the 1st phase, in which memory would be allocated to the Variables and functions.
- all variables will be stored with the undefined.
- all functions will be stored with their function definition.

[2]. Execution Phase ( Thread of Execution )

- Then the real execution of code started.
- variables will be assigned their original value in this phase.
- when there is a function call happens,
    - new execution context will be made and pushed to call stack.
    - again same memory and execution phases happen for that function
    - once function execution gets completed, then execution context of that function will be removed.

- Javascript executes all execution contexts from Call-Stack.

## when execution context is created with that global object created and also this variable is created. 
## Global Memory space is a space which is not inside a function.

