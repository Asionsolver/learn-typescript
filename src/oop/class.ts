// class Animal {
//   private name: string;
//   private species: string;
//   private sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound(): void {
//     console.log(`${this.name} the ${this.species} says ${this.sound}`);
//   }
// }

// const dog = new Animal("Buddy", "Dog", "Woof");
// const cat = new Animal("Whiskers", "Cat", "Meow");
// const cow = new Animal("Bessie", "Cow", "Moo");
// cat.makeSound(); // "Whiskers the Cat says Meow"
// dog.makeSound(); // "Buddy the Dog says Woof"
// cow.makeSound(); // "Bessie the Cow says Moo"

// Using parameter properties
class Animal {
  // Using parameter properties to declare and initialize class properties
  constructor(
    private name: string,
    private species: string,
    private sound: string
  ) {}

  makeSound(): void {
    console.log(`${this.name} the ${this.species} says ${this.sound}`);
  }
}

const dog = new Animal("Buddy", "Dog", "Woof");
const cat = new Animal("Whiskers", "Cat", "Meow");
const cow = new Animal("Bessie", "Cow", "Moo");
cat.makeSound(); // "Whiskers the Cat says Meow"
dog.makeSound(); // "Buddy the Dog says Woof"
cow.makeSound(); // "Bessie the Cow says Moo"
