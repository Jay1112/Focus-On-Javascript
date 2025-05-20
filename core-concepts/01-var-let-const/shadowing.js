// we can shadow the values of var, let 

// valid way of shadowing 
var a = 20;
{
    let a = 40;
    console.log(a)
}
console.log(a)

// [ we can shadow the var variable by let but let variable can't be shadow ]
// this is called illegal shadowing as mentioned in below example

// let b = 20;
// {
//     var b = 40;
//     console.log(b)
// }
// console.log(b)