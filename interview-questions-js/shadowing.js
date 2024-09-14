let a = 20 ;
var b = 30 ; 

{
    var a = 30 ; // this creates a problem for us.
    let b = 40 ;
}

/*

when we are trying to shadow value of let variable by var variable, it is illegal shadowing but
wehn we are trying to shadow value of var variable by let variable, it is legal shadowing. 

*/

