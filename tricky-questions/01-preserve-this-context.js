const Person = function(name){
    this.name = name;

    this.displayName1 = function(){
        console.log("Normal : ",this.name)
    }

    this.displayName2 = () => {
        console.log("Arrow : ",this.name)
    }
}

const john = new Person('John');
const dave = new Person('dave');

console.log("Normal Calling : ")
john.displayName1(); // john 
john.displayName2(); // john

// call
console.log("\nCall : ");
john.displayName1.call(dave) // dave
john.displayName2.call(dave) // john

// apply
console.log("\napply : ");
john.displayName1.apply(dave) // dave
john.displayName2.apply(dave) // john

// bind
console.log("\n bind : ");
john.displayName1.bind(dave)() // dave
john.displayName2.bind(dave)() // john

console.log("\n")
const fn1 = john.displayName1;
fn1(); // global object or undefined( strict mode )

console.log("\n")
const fn2 = john.displayName2;
fn2(); // global object or undefined( strict mode )