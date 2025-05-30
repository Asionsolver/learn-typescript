/**
@Basic Class Implementation
** 1. Create a PersonOne class with:

** 2. Properties: name (string), age (number)

** 3. Constructor to initialize these properties

** 4. Method introduce() that returns a string like "Hello, my name is [name] and I'm [age] years old."
*/

// ✅ Create a PersonOne class
class PersonOne {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const personObjOne = new PersonOne("Asion", 25);

console.log(personObjOne.age);
personObjOne.introduce();
