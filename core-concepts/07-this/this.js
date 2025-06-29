// this is used to reference something.
// this is dependes on calling context.

// Que 1

let user = {
    name : 'a',
    childObj : {
        fullname : 'b',
        display : function(){
            console.log(this.fullname, " : ", this.name) // b : undefined
        }
    }
}

user.childObj.display();

// Que 2

let user2 = {
    name : 'a',
    getName : () => {
        console.log(this.name)
    },
    getNameV2: function(){
        const getName = () => {
            console.log(this.name)
        }   
        getName();
    },
    getNameV3: function(){
        console.log(this.name)
    }
}

user2.getName();
user2.getNameV2();

// setTimeout(user2.getNameV3, 3000); // undefined becuase it is passed as callback and it is treated as function copy 
// setTimeout(() => {user2.getNameV3()}, 3000); // a here it is called from as method of an object

var length = 4;
function callback(){
    console.log("Length : ",this.length)
}
const test = {
    length : 5,
    message(fn){
        fn();
        arguments[0]();
    }
}

test.message(callback, 2, 3)