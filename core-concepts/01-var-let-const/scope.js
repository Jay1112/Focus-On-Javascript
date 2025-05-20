// 4 scopes

// 1. global scope
// 2. functional scope
// 3. blocked scope
// 4. module scope

// var -> function scope
// function test(){
//     var a = 20;
//     console.log(a);
// }
// test();

// let , const -> blocked scope
// let a = 10;
// {
//     let a = 20;
//     console.log(a);
//     a = 50;
// }
// console.log(a);