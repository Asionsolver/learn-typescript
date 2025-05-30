/**
 * @Composition over @Inheritance
 ** 1. Create a Engine class and a Car class where Car has an Engine instance (composition) rather than inheriting from Engine.
 */

class Engine {
  private horsepower: number;

  constructor(horsepower: number) {
    this.horsepower = horsepower;
  }

  start(): void {
    console.log(`Engine with ${this.horsepower} HP started.`);
  }

  stop(): void {
    console.log("Engine stopped.");
  }
}

class ComposedCar {
  private engine: Engine;
  private model: string;

  constructor(model: string, engine: Engine) {
    this.model = model;
    this.engine = engine;
  }

  startCar(): void {
    console.log(`Starting car: ${this.model}`);
    this.engine.start();
  }

  stopCar(): void {
    console.log(`Stopping car: ${this.model}`);
    this.engine.stop();
  }
}

// Example usage:
const myEngine = new Engine(200);
const composedCar = new ComposedCar("Sedan", myEngine);

composedCar.startCar();
composedCar.stopCar();
