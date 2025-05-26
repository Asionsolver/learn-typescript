type AlphaNumeric = string | number;

function add(a: AlphaNumeric, b: AlphaNumeric): AlphaNumeric {
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // Concatenate strings
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b; // Add numbers
  } else {
    return a.toString() + b.toString(); // Concatenate mixed types
  }
}

// console.log(add("Hello, ", "World!")); // "Hello, World!"
// console.log(add(5, 10)); // 15
// console.log(add("Number: ", 42)); // "Number: 42"
// console.log(add(3, " apples")); // "3 apples"
// console.log(add("3", 4)); // "34" (string concatenation)

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: string;
};
function isAdminUser(user: NormalUser | AdminUser) {
  if ("role" in user) {
    return true; // user is an AdminUser
  }
  return false; // user is a NormalUser
}

// const user1: NormalUser = { name: "Alice" };
// const user2: AdminUser = { name: "Bob", role: "Administrator" };
// console.log(isAdminUser(user1)); // false
// console.log(isAdminUser(user2)); // true

interface UserResponse {
  userId: string;
  username: string;
  email: string;
}

interface ProductResponse {
  productId: string;
  name: string;
  price: number;
}

function sendWelcomeEmail(email: string) {
  console.log(`Sending welcome email to ${email}`);
}
function updateInventory(productId: string) {
  console.log(`Updating inventory for product ID: ${productId}`);
}

function handleApiResponse(response: UserResponse | ProductResponse) {
  if ("userId" in response) {
    // TypeScript knows this is UserResponse
    console.log(`User ${response.username} (${response.email})`);
    sendWelcomeEmail(response.email);
  } else {
    // TypeScript knows this is ProductResponse
    console.log(`Product ${response.name} costs $${response.price}`);
    updateInventory(response.productId);
  }
}

// Usage
// handleApiResponse({
//   userId: "u123",
//   username: "johndoe",
//   email: "john@example.com",
// });
// // Output: "User johndoe (john@example.com)"

// handleApiResponse({
//   productId: "p456",
//   name: "Laptop",
//   price: 999,
// });
// // Output: "Product Laptop costs $999"

interface IIdName {
  id: number;
  name: string;
}

interface IDescrValue {
  descr: string;
  value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue): void {
  // Check if 'id' exists in obj
  if ("id" in obj) {
    // TypeScript now knows obj is IIdName
    console.log(`Name: ${obj.name}`);
  }

  // Check if 'descr' exists in obj
  if ("descr" in obj) {
    console.log(`Value: ${obj.value}`);
  }
}

// Test cases
// printNameOrValue({ id: 1, name: "Alice" });
// // Output: "Name: Alice"

// printNameOrValue({ descr: "Product", value: 99 });
// // Output: "Value: 99"

// printNameOrValue({ id: 2, name: "Bob", descr: "Manager", value: 100 });
// // Output: "Name: Bob" and "Value: 100"

interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // TypeScript knows this is a Dog
  } else {
    animal.meow(); // TypeScript knows this is a Cat
  }
}

const myDog: Dog = {
  bark: () => console.log("Woof!"),
};

const myCat: Cat = {
  meow: () => console.log("Meow!"),
};

// makeSound(myDog); // Output: "Woof!"
// makeSound(myCat); // Output: "Meow!"

interface Employee {
  type: "employee";
  id: string;
  department: string;
  salary: number;
}

interface Contractor {
  type: "contractor";
  contractId: string;
  company: string;
  hourlyRate: number;
}
function calculateYearlyBonus(salary: number): number {
  return salary * 0.1; // 10% bonus
}
function trackContractHours(contractId: string, hourlyRate: number): void {
  console.log(
    `Tracking hours for contract ${contractId} at $${hourlyRate}/hour`
  );
}

function processWorker(worker: Employee | Contractor) {
  if ("department" in worker) {
    // TypeScript knows this is Employee
    console.log(`Processing payroll for ${worker.id} in ${worker.department}`);
    calculateYearlyBonus(worker.salary);
  } else {
    // TypeScript knows this is Contractor
    console.log(`Processing invoice for ${worker.company}`);
    trackContractHours(worker.contractId, worker.hourlyRate);
  }

  // Alternative check using discriminant property
  if (worker.type === "employee") {
    // Also works - TypeScript knows this is Employee
  }
}

// Usage
processWorker({
  type: "employee",
  id: "e789",
  department: "Engineering",
  salary: 85000,
});

processWorker({
  type: "contractor",
  contractId: "c123",
  company: "TechSolutions Inc.",
  hourlyRate: 75,
});
