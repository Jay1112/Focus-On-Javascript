// apply is used to share method to other object
const user = {
    name : 'jay',
    displayName : function(age){
        console.log(this.name, " : " ,age)
    }
}

const user2 = {
    name : 'Under',
}

user.displayName.apply(user2, [67])

// append one array to another
const arr = [0,1,2]
const elements = ['a', 'b']

arr.push.apply(arr,elements)
console.log(arr)

// find maximum number
const numbers = [1,2,3,4,5,6];
console.log(Math.max.apply(null, numbers))