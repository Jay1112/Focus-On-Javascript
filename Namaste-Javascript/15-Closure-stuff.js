function Counter(){
    let count = 0 ;
    this.increment = () => {
        count++;
        console.log(count);
    }
    this.decrement = () => {
        count--;
        console.log(count);
    }
}

let obj = new Counter();
obj.increment();
obj.increment();
obj.decrement();

let obj2 = new Counter();
obj2.increment();
obj2.decrement();
obj2.increment();