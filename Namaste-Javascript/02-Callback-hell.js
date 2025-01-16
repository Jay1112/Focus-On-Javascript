// callback is a way to do async task in javascript

// Callback creates 2 main issues

// [1]. Callback Hell
// [2]. Inversions of Control

// Callback Hell
// Callback Hell in javascript is a situation where multiple callbacks are nested within a function
// making the code difficult to read and debug.

// Inversion of Control
// Inversion of Control is a design pattern that moves an object's behaviour control outside of the object itself.
// Inversion of control is another problem we can see while working with callbacks.

const api = {
    wallet : 400,
    cart : ["Watch", "Shirt", "headphone"],
    createOrder : function(callback, context){
        console.log("Create Order Started....");
        setTimeout(callback.call(context || this),2000)
    },
    proceedToPayment: function(callback, context){
        console.log("Proceed to Payment...");
        setTimeout(()=>{
            console.log("Payment Successful");
            callback.call(context || this);
        },5000)
    },
    OrderSummary: function(){
        console.log("- - - - - - - - - - ");
        console.log("Order Summary");
        for(const item of this.cart){
            console.log(item)
        }
        console.log("- - - - - - - - - - ");
    }
}

api.createOrder(function(){
    api.proceedToPayment(function(){
        api.OrderSummary();
    },api);
},api)

