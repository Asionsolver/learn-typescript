# Extend VS Implement

## Usage with Classes and Interfaces

| Feature       | extends                          | implements                          |
| ------------- | -------------------------------- | ----------------------------------- |
| Applicable to | Classes and Interfaces           | Only Classes                        |
| Purpose       | Inherits properties/methods      | Forces class to match an interface  |
| Inheritance   | Gets parent's implementation     | Must provide own implementation     |
| Multiple?     | No (single inheritance in TS/JS) | Yes (can implement many interfaces) |

## Real-World Examples `extends` (Inheritance)

```Typescript
class Animal {
  move() { console.log("Moving..."); }
}

class Dog extends Animal {  // Dog inherits `move()`
  bark() { console.log("Woof!"); }
}

const dog = new Dog();
dog.move();  // "Moving..." (inherited)
dog.bark();  // "Woof!"
```

## Real-World Examples `implement` (Interface Compliance)

> #### What is Interface Compliance?
>
> Interface compliance means that a class or object must fulfill the contract defined by an interface. In other words, if a class `implements` an interface, it must provide implementations for all properties/methods declared in that interface. TypeScript checks this at compile time.
>
> #### What Does "Compliance" Mean?
>
> An interface defines a shape (structure) that a class/object must follow. Compliance ensures:
>
> 1. All required members (methods/properties) are implemented.
> 2. Types match exactly (no string vs number mismatches).
> 3. No missing or extra mandatory properties.

### Example 1: Basic Interface Compliance

```Typescript
interface Vehicle {
  speed: number;
  accelerate(): void;
}

class Car implements Vehicle {
  speed: number = 0;  // Required by Vehicle

  accelerate() {      // Required by Vehicle
    this.speed += 10;
  }
}

// ✅ Compliant: Car has `speed` and `accelerate()`
```

> If Car misses speed or accelerate(), TypeScript throws an error.

### Example 2: Non-Compliance (Error Case)

```Typescript
interface Vehicle {
  speed: number;
  accelerate(): void;
}

class Bicycle implements Vehicle {  // ❌ ERROR: Missing 'accelerate'
  speed: number = 0;
}
// TypeScript Error:
// Class 'Bicycle' incorrectly implements interface 'Vehicle'.
// Property 'accelerate' is missing.
```

### Example 3: Optional Properties

Interfaces can have optional properties `(?)`, which don’t require strict compliance.

```Typescript
interface User {
  name: string;
  age?: number;  // Optional
}

class Admin implements User {
  name: string = "Alice";  // ✅ Compliant (age is optional)
}
```

### 3. Deep Compliance Rules

#### Rule 1: Exact Property Types

The implementing class must match exact types.

```Typescript
interface Product {
  id: string;
  price: number;
}

class Book implements Product {
  id: string = "123";
  price: number = 19.99;  // ✅ Correct types
}

class InvalidProduct implements Product {
  id: string = "456";
  price: string = "20.00";  // ❌ Type 'string' is not assignable to 'number'
}
```

#### Rule 2: Extra Properties Are Allowed

A class can have more properties than the interface requires.

```Typescript
interface Animal {
  name: string;
}

class Dog implements Animal {
  name: string = "Rex";
  breed: string = "Labrador";  // ✅ Allowed (extra property)
}
```

#### Rule 3: Readonly Properties Must Be Respected

If an interface marks a property as readonly, the class must also enforce immutability.

```Typescript
interface Config {
  readonly apiKey: string;
}

class AppConfig implements Config {
  readonly apiKey: string;  // ✅ Must be readonly
  constructor(key: string) {
    this.apiKey = key;
  }
}

const config = new AppConfig("123");
config.apiKey = "456";  // ❌ Error: Cannot assign to 'apiKey' (readonly)
```

### 4. Advanced Compliance Scenarios

#### Scenario 1: Implementing Multiple Interfaces

A class can comply with multiple interfaces at once.

```Typescript
interface Loggable {
  log(): void;
}

interface Serializable {
  serialize(): string;
}

class Document implements Loggable, Serializable {
  log() { console.log("Logging..."); }
  serialize() { return JSON.stringify(this); }
}
```

#### Scenario 2: Dynamic Compliance (Structural Typing)

TypeScript uses structural typing, meaning an object can comply with an interface without explicitly declaring `implements`.

```Typescript
interface Point {
  x: number;
  y: number;
}

// No `implements`, but structure matches
const point: Point = { x: 10, y: 20 };  // ✅ Valid
```

#### Scenario 3: Function Interface Compliance

Interfaces can describe functions, and classes can comply with them.

```Typescript
interface StringFormatter {
  (input: string): string;
}

class Uppercaser implements StringFormatter {
  // Treat the class itself as a function
  constructor() {}
  call(input: string): string {
    return input.toUpperCase();
  }
}

// Alternatively, using a function object:
const formatter: StringFormatter = (input) => input.toUpperCase();
```

### 5. Best Practices for Interface Compliance

1. Use implements for clarity (even though TypeScript doesn’t require it).

2. Prefer interfaces over abstract classes when you don’t need shared logic.

3. Keep interfaces small (Single Responsibility Principle).

4. Leverage extends for interfaces to compose larger contracts.

```Typescript
interface A { a: number; }
interface B extends A { b: string; }  // B now requires `a` and `b`
```

## Summary

| Concept                  | Meaning                                                               |
| ------------------------ | --------------------------------------------------------------------- |
| Interface Compliance     | A class/object must match an interface’s structure.                   |
| Enforced at compile-time | TypeScript checks for missing/wrong properties.                       |
| Extra properties allowed | Classes can have more fields than the interface.                      |
| Structural typing        | Objects can implicitly comply with interfaces if their shape matches. |
