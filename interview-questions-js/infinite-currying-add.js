function add(num){
    return function(arg){
        if(arg) return add(num + arg);
        return num;
    }
}

console.log(add(2)(3)(40)(50)());