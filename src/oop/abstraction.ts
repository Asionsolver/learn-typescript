// Abstraction in TypeScript: Defining an interface and implementing it in a class
// idea generate
// interface Vehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   accelerate(increment: number): void;
//   move(): void;
//   brake(): void;
// }

// // real implementation of the Vehicle interface
// class Car implements Vehicle {
//   private speed: number = 0;

//   startEngine(): void {
//     console.log("Car engine started.");
//   }

//   stopEngine(): void {
//     console.log("Car engine stopped.");
//   }

//   accelerate(increment: number): void {
//     this.speed += increment;
//     console.log(`Car accelerated to ${this.speed} km/h.`);
//   }

//   move(): void {
//     console.log(`Car is moving at ${this.speed} km/h.`);
//   }

//   brake(): void {
//     this.speed = 0;
//     console.log("Car has stopped.");
//   }

//   // Additional method specific to Car
//   openTrunk(): void {
//     console.log("Car trunk opened.");
//   }
// }

// const myCar = new Car();
// myCar.startEngine();
// myCar.accelerate(50);
// myCar.move();
// myCar.brake();
// myCar.stopEngine();
// myCar.openTrunk(); // Car trunk opened.

// Abstraction in TypeScript: Using the abstract class

abstract class Vehicle {
  protected speed: number = 0;

  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract accelerate(increment: number): void;
  abstract move(): void;
  abstract brake(): void;
}

// Real implementation of the Vehicle abstract class
class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started.");
  }
  stopEngine(): void {
    console.log("Car engine stopped.");
  }
  accelerate(increment: number): void {
    this.speed += increment;
    console.log(`Car accelerated to ${this.speed} km/h.`);
  }
  move(): void {
    console.log(`Car is moving at ${this.speed} km/h.`);
  }
  brake(): void {
    this.speed = 0;
    console.log("Car has stopped.");
  }

  // Additional method specific to Car
  openTrunk(): void {
    console.log("Car trunk opened.");
  }
}

// const myVehicle = new Vehicle(); // Cannot create an instance of an abstract class.

const myCar = new Car();
myCar.startEngine();
myCar.accelerate(50);
myCar.move();
myCar.brake();
myCar.stopEngine();
myCar.openTrunk(); // Car trunk opened.
