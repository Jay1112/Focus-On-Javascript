const math = {
    total : 0,
    add : function(num){
        this.total += num ;
        return this;
    },
    multuply : function(num){
        this.total *= num ;
        return this;
    },
    subtract : function(num){
        this.total -= num ;
        return this;
    },
}

const ans = math.add(2).multuply(30).subtract(4).add(10);
console.log("Answer : ",ans.total);