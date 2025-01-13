/* Que : 1 */

const user = {
    name : 'Jay',
    getName(){
        console.log(this.name) // empty
    }
}

// here user.getName function is passed as callback [function is copied]
setTimeout(user.getName,1000)


/* Que : 2 */
var size = 4 ; 
function callback(){
    console.log(this.size)
}

const obj = {
    size : 5,
    method(fn){
        fn();
    }
}

obj.method(callback);

/* Que : 3 */
var length = 4 ; 
function callback2(){
    console.log(this.length)
}

const obj2 = {
    length : 5,
    method(){
        arguments[0](); // 3
    }
}

obj2.method(callback2,3,4); // 3

/* Que : 4 */
const calc = {
    init : 0,
    add(value){
        this.init = this.init + value;
        return this;
    },
    mul(value){
        this.init = this.init * value;
        return this;
    },
    sub(value){
        this.init = this.init - value;
        return this;
    },
    divide(value){
        this.init = this.init / value;
        return this;
    },
    getValue(){
        return this.init;
    }
}

const answer = calc.add(5).mul(4).sub(2).getValue();
console.log(answer)