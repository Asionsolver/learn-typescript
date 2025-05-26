class PersonObj {
  getSleep() {
    console.log("I am sleeping 8 hours a day");
  }
}

class ProgrammerObj extends PersonObj {
  getSleep() {
    console.log("I am sleeping 6 hours a day");
  }
}
class DesignerObj extends PersonObj {
  getSleep() {
    console.log("I am sleeping 7 hours a day");
  }
}

function getSleepTime(person: PersonObj) {
  person.getSleep();
}

const personObj = new PersonObj();
const programmerObj = new ProgrammerObj();
const designerObj = new DesignerObj();
// getSleepTime(personObj); // I am sleeping 8 hours a day
// getSleepTime(programmerObj); // I am sleeping 6 hours a day
// getSleepTime(designerObj); // I am sleeping 7 hours a day

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const getShapeArea = (shape: Shape): number => {
  return shape.getArea();
};
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(getShapeArea(circle)); // 78.53981633974483
console.log(getShapeArea(rectangle)); // 24
