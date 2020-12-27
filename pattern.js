// const animalMethods = {
//     eat(amount) {
//         console.log(`${this.name} is eating`);
//     },
//     play(amount) {
//         console.log(`${this.name} is playing`);
//     },
    
// }

function Animal(name, energy){
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    

    return animal;
}

function AnimalWithNew(name, energy){
    this.name = name;
    this.energy = energy;
    //Implicit return instance
}

Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`);
}

Animal.prototype.play = function(amount){
    console.log(`${this.name} is playing`);
}
const newAnimal = Animal("Catherine");

newAnimal.eat();