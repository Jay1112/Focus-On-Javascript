function Animal(name){
    this.name = name;
}

Animal.prototype.makeSound = function(){
    console.log("Animal Make Sound...")
}

function Dog(name){
    Animal.call(this, name);
}

Dog.prototype.bark = function(){
    console.log("Dog Bark...", this.name);
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

const dog = new Dog("Monty");
dog.makeSound();
dog.bark();