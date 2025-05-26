class AnimalObj {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound(): void {
    console.log(`${this.name} the ${this.species} says ${this.sound}`);
  }
}

class Dog extends AnimalObj {
  constructor(
    name: string,
    species: string,
    sound: string,
    public breed: string
  ) {
    super(name, species, sound);
    this.breed = breed;
  }
  makeBark(): void {
    console.log(
      `${this.name} the ${this.species} of breed ${this.breed} barks: ${this.sound}`
    );
  }
}
class Cat extends AnimalObj {
  constructor(
    name: string,
    species: string,
    sound: string,
    public color: string
  ) {
    super(name, species, sound);
    this.color = color;
  }
  makeMeow(): void {
    console.log(
      `${this.name} the ${this.species} of color ${this.color} meows: ${this.sound}`
    );
  }
}

const dogOne = new Dog("Buddy", "Dog", "Woof", "Golden Retriever");
const catOne = new Cat("Whiskers", "Cat", "Meow", "Tabby");
// dogOne.makeSound(); // "Buddy the Dog says Woof"
// catOne.makeSound(); // "Whiskers the Cat says Meow"
// dogOne.makeBark(); // "Buddy the Dog of breed Golden Retriever barks: Woof"
// catOne.makeMeow(); // "Whiskers the Cat of color Tabby meows: Meow"

// const getAnimal = (animal: AnimalObj) => {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeow();
//   } else {
//     animal.makeSound();
//   }
// };

// smart way to handle different animal types using function
const isDog = (animal: AnimalObj): animal is Dog => {
  return animal instanceof Dog;
};

const isCat = (animal: AnimalObj): animal is Cat => {
  return animal instanceof Cat;
};
const getAnimal = (animal: AnimalObj) => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
};
getAnimal(dogOne); // "Buddy the Dog of breed Golden Retriever barks: Woof"
getAnimal(catOne); // "Whiskers the Cat of color Tabby meows: Meow"
getAnimal(new AnimalObj("Bessie", "Cow", "Moo")); // "Bessie the Cow says Moo"
