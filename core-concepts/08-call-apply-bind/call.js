// call is used to share method to other object
const user = {
    name : 'jay',
    displayName : function(age){
        console.log(this.name, " : " ,age)
    }
}

const user2 = {
    name : 'John',
}

user.displayName.call(user2, 65)