class Loggers {
  private static instance: Loggers;
  private logs: string[];

  private constructor() {
    this.logs = [];
  }

  public static getInstance(): Loggers {
    if (!Loggers.instance) {
      Loggers.instance = new Loggers();
    }
    return Loggers.instance;
  }

  public log(message: string): void {
    const now = new Date();
    const datePart = now.toDateString(); // e.g., "Sat May 31 2025"
    const timePart = now.toTimeString().split(" ")[0]; // e.g., "01:04:33"
    const fullMessage = `${datePart} ${timePart} - ${message}`;
    this.logs.push(fullMessage);
    // console.log(fullMessage); // Optional: print log immediately
  }

  getLogs(): string[] {
    return [...this.logs]; // Return a copy to maintain encapsulation
  }
}

const loggerOne = Loggers.getInstance();
loggerOne.log("First message.");
// loggerOne.log("First message.");
// loggerOne.log("First message.");
console.log(loggerOne.getLogs());

const loggerTwo = Loggers.getInstance();
loggerTwo.log("Second Message.");
console.log(loggerTwo.getLogs());

const loggerThree = Loggers.getInstance();
loggerThree.log("Third Message.");
console.log(loggerThree.getLogs());

console.log(loggerOne === loggerTwo); // true - same instance
