// bind chaining does not exist

function displayName(age){
    console.log("Name : ", this.name);
    console.log("Age : ", age)
}

const user1 = {
    name : 'Tuna Singh'
}

const user2 = {
    name : 'Undertaker maheta'
}

const context1 = displayName.bind(user1);
context1(95);

const context2 = displayName.bind(user2, 89);
context2();

// question
function fun(){
    console.log(this);
}

const user = {
    g : fun.bind(null)
}

user.g();

// bind chaining
function disp(){
    console.log(this.name)
}

disp = disp.bind({ name : 'x' }).bind({ name : 'y' })
disp();