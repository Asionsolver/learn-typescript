/**
The name Logger now has two roles:

@Type It describes the shape of any object created from the class.

@Value It is also the class constructor function that you can use to create new instances.
*/

// class Logger {
//   logger(message: string): void {
//     console.log(message);
//   }
// }

// // Using Logger as a TYPE
// let myLogger: Logger; // ? We're saying: "myLogger should follow the structure of Logger"

// myLogger = {
//   logger(msg: string) {
//     console.log("From myLogger:", msg);
//   },
// };

// myLogger.logger("Hello"); // ✅ Works because object matches the Logger class structure
// ➡️ Here, Logger is just being used as a type — it's not being instantiated. We're saying "myLogger must look like a Logger" — i.e., it must have a log(message: string) method.
// class Logger {
//   log(message: string): void {
//     console.log("From class Logger:", message);
//   }
// }

// // Using Logger as a VALUE (constructor)
// let logger = new Logger(); // Logger is being used to create an instance (object)
// logger.log("Hello"); // ✅ Works

// class Cars {
//   brand: string;

//   constructor(brand: string) {
//     this.brand = brand;
//   }

//   drive() {
//     console.log(`${this.brand} is driving.`);
//   }
// }

// let myCarInfo: Cars; // <- Car is being used as a TYPE

// myCarInfo = {
//   brand: "Toyota",
//   drive() {
//     console.log("Toyota is driving.");
//   },
// };

// myCarInfo.drive();
// const car1 = new Cars("BMW"); // <- Car is being used as a VALUE (constructor)
// car1.drive(); // Output: BMW is driving.

class TV {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  turnOn() {
    console.log(`${this.brand} TV is now ON`);
  }
}

let fakeTV: TV;

fakeTV = {
  brand: "FakeBrand",
  turnOn() {
    console.log("FakeBrand TV is now ON");
  },
};

const fakeTVTwo = new TV("FakeBrand2");

fakeTV.turnOn(); // ✅ Works!
fakeTVTwo.turnOn();
