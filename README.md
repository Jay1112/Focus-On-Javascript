- EveryThing in Javascript happens in **Execution Context.**
- Execution Context :
    - It is a block which has two phases
        - **Memory Phase ( Variable Environment )**
            - where all variables and functions are stored as key-value pair.
        - **Code Component ( Thread of Execution )**
            - where code will be executed line by line.
- Javascript is a **synchronous** and **single threaded** language.

---

- Initially, Global Context created and pushed to call stack.
- In First Phase, all the variables assigned **undefined** value and functions stored with their definitions.
- in Second Phase, JS code will be executed line by line and value will be assigned to the respective variable.
- once the execution completed, global context will removed from call stack.
- suppose, in the code if there is a function call then new execution context created for that function and pushed to call stack.
- same phases take place as we have discussed above for global context.
- once, function completes the execution, it will be popped out from the call stack.

```jsx
function displayMessage(){
	console.log("Function call...");
}

const val = 25 ;
console.log(val); // 25

displayMessage(); // Function call... new execution context will be created here
// at the end, Global Execution Context will be removed from call-stack.
```

---

## Hoisting

- Hoisting is not a magic in JS. if you understand how Javascript code works you don’t need to worry about hoisting.
- In Hoisting, you can access variables and functions even before you initialized them.
- example :
    
    ```java
    getName();
    console.log(x);
    
    var x = 7 ; 
    function getName(){
    	console.log("Namaste Javascript...");
    }
    
    // output
    // Namaste Javascript...
    // undefined
    ```
    
- example :
    
    ```java
    getName();
    console.log(x);
    
    var x = 7 ; 
    var getName = () => {
    	console.log("Namaste Javascript...");
    }
    
    // output
    // Error : getName is not a function
    ```
    

---

- When JS executes Global execution context created with Window Object.
- **this** will be pointing to this window Object initially.
- **Global Space :**
    - variables and functions which are at the top level of code and they are not initialised or created in any other function is called Global Space.

---

## Undefined vs not defined