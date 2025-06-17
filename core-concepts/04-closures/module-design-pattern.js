// What is Module Pattern ?

// we make our methods as private so that they are not directly accessible and they are called
// through public methods

var Module = (function(){
    function privateMethod(str){
        console.log("Private Method... : ", str)
    }

    return {
        publicMethod : function(str){
            privateMethod(str);
        }
    }
})();

Module.publicMethod("I am Patel");
Module.privateMethod("I am Patel"); // Error