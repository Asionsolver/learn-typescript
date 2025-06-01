/**
 * @Decorator @Pattern
 ** The Decorator Pattern is a structural design pattern that allows you to dynamically add new behavior to objects without modifying their original code.

 ** 🧠 Why Use It?
 ** When you want to extend the behavior of objects at runtime.
 
 ** When inheritance is not flexible enough or would lead to a large number of subclasses.

 **💡 Structure
 ** 1. Component – base interface or abstract class.

 ** 2. ConcreteComponent – the core object to which new behavior will be added.

 ** 3. Decorator – base class that wraps a component.

 ** 4. ConcreteDecorators – classes that add extra behavior.

 ** ☕️ Context: What Are We Doing?
 ** We have a system where you can build a custom coffee order by adding features (like milk, sugar) using the Decorator Pattern — without changing the original coffee class.
 */

//Component Interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete Component
class BasicCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return "Basic Coffee";
  }
}

// Base Decorator
class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}

class HardDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 5;
  }
  description(): string {
    return this.coffee.description() + ", Hard Coffee";
  }
}

// let myCoffee: Coffee = new BasicCoffee();
// console.log(myCoffee.description(), "=>", myCoffee.cost()); // Basic Coffee => 5

// myCoffee = new MilkDecorator(myCoffee);
// myCoffee = new SugarDecorator(myCoffee);
// console.log(myCoffee.description(), "=>", myCoffee.cost()); // Basic Coffee, Milk, Sugar => 8

let hardCoffee: Coffee = new BasicCoffee();
console.log(hardCoffee.description(), "=>", hardCoffee.cost());

hardCoffee = new HardDecorator(hardCoffee);
console.log(hardCoffee.description(), "=>", hardCoffee.cost());
