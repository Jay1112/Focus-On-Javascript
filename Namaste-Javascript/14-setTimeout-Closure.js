function x(){
    for(var i = 1 ; i <= 5; i++){
        setTimeout(() => {
            console.log("Value : ", i)
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
// x();

// solution ( use let instead of var )
function y(){
    for(let i = 1 ; i <= 5; i++){
        setTimeout(() => {
            console.log("Value : ", i)
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
// y();

// solution ( use concept of closures )
function z(){
    for(var i = 1 ; i <= 5; i++){
        function test(i){
            setTimeout(()=>{
                console.log("Value : ", i)
            },i * 1000)
        }
        test(i);
    }
    console.log("Namaste Javascript");
}
z();