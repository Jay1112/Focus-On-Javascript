// Bind Polyfill

// Polyfill : Polyfill is a our own implementation of inbuilt function in javascript.

const user = {
    firstname : 'Jay',
    lastname  : 'Patel'
};

function display( age, gender ){
    console.log(`Name : ${this.firstname} ${this.lastname} | Age : ${age} | Gender : ${gender}`);
}

// const customFxn = display.bind(user, 29);
// customFxn('MALE');

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error("myBind is only callable on functions");
    }

    context.fn = this;
    return function(...newArgs){
        context.fn(...args, ...newArgs);
    }
}

const customFxn = display.myBind(user, 33);
customFxn('PsFemale');