// Call Polyfill

// Polyfill : Polyfill is a our own implementation of inbuilt function in javascript.

const user = {
    firstname : 'Jay',
    lastname  : 'Patel'
};

function display( age, gender ){
    console.log(`Name : ${this.firstname} ${this.lastname} | Age : ${age} | Gender : ${gender}`);
}

// display.call(user, 25, 'male')


Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error("call is only applicable on functions");
    }

    context.fn = this;
    context.fn(...args);
}

display.myCall(user, 26, 'female')