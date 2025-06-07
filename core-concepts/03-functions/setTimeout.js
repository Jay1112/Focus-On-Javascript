function setTimeoutWithLet(){
    for(let i = 0 ; i < 5; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}
// setTimeoutWithLet();

function setTimeoutWithVar(){
    for(var i = 0 ; i < 5; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}
// setTimeoutWithVar();

function setTimeoutWithVarAndClosure(){
    for(var i = 0 ; i < 5; i++){
        function test(index){
            setTimeout(() => {
                console.log(index)
            }, index * 1000)
        }
        test(i);
    }
}
setTimeoutWithVarAndClosure();