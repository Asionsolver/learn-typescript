/**
* @Polymorphism with Shapes
** 1. Create an abstract Shape class with:

** 2. Abstract method area()

** 3. Abstract method perimeter()

** 4. Concrete method describe() that returns "This is a shape"
** 5. Then create Circle, Rectangle, and Triangle classes that extend Shape.
*/

abstract class AbstractShape {
  abstract area(): number;
  abstract perimeter(): number;
  describe(): string {
    return "This is a shape";
  }
}

class ShapeCircle extends AbstractShape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class RectangleShape extends AbstractShape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends AbstractShape {
  constructor(public a: number, public b: number, public c: number) {
    super();
  }
  area(): number {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  perimeter(): number {
    return this.a + this.b + this.c;
  }
}
