// Arrow Function vs Normal Function

// 1. Syntax 
// function sqaure(num){
//    return num * num ;
// }

// const sqaureArrow = (num) => {
//     return num * num ;
// }

// // 2 - Implicit Return statement
// const squareArrowImplicit = (num) => num * num ;

// 3 - Arguments
function Arguments(){
    console.log(arguments);
}

const Arguments2 = () => {
    console.log(arguments);
}

Arguments('Jay',12,'Testing');
Arguments2('Jay',12,'Testing');

// 4 : this keyword binding