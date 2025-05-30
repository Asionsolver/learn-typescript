/**
@Inheritance Basics

** 1. Create a Vehicle class with properties make and model. Then create a Car class that extends Vehicle and adds a numDoors property.

@Interface Implementation

** 3. Create an Animal interface with methods makeSound() and move(). Implement this interface in Dog and Bird classes with appropriate implementations.
*/

class VehicleInfo {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class CarInfo extends VehicleInfo {
  numDoors: number;

  constructor(make: string, model: string, numDoors: number) {
    super(make, model);
    this.numDoors = numDoors;
  }
}

interface IAnimal {
  makeSound(): void;
  move(): void;
}

class DogInfo implements IAnimal {
  makeSound(): void {
    console.log("Woof!");
  }
  move(): void {
    console.log("The dog runs.");
  }
}

class BirdInfo implements IAnimal {
  makeSound(): void {
    console.log("Chirp!");
  }
  move(): void {
    console.log("The bird flies.");
  }
}
