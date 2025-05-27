class Container<T> {
  constructor(private arg: T) {}

  get values(): T {
    return this.arg;
  }

  //   set values(value: T) {
  //     if (typeof value === "string") {
  //       value.toUpperCase;
  //     } else {
  //       value;
  //     }
  //   }
}

const numberContainer = new Container<number>(4345);
console.log(numberContainer.values);
const stringContainer = new Container<string>("Ashis");
console.log(stringContainer.values);
const booleanContainer = new Container<boolean>(true);
console.log(booleanContainer.values);
