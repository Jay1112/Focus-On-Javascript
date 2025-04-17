// Apply Polyfill

// Polyfill : Polyfill is a our own implementation of inbuilt function in javascript.

const user = {
    firstname : 'Jay',
    lastname  : 'Patel'
};

function display( age, gender ){
    console.log(`Name : ${this.firstname} ${this.lastname} | Age : ${age} | Gender : ${gender}`);
}

// display.apply(user, [27, 'others']);

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== 'function'){
        throw new Error("Apply is only callable on functions");
    }

    context.fn = this;
    context.fn(...args);
}

display.myApply(user, [28, 'female']);