// Tuples are a method of defining a type that has a finite number of unnamed properties, with each property having an associated type. When using a tuple, all of the properties must be provided.

// Finite Number = Fixed Length

const arr: number[] = [1, 2, 3];
arr.push(4); // This is fine, we can add more elements
console.log(arr); // Output: [1, 2, 3, 4]

// Tuple - has exactly 2 elements
const tuples: readonly [string, number] = ["Alice", 30];
// tuples.push("Bob"); //Property 'push' does not exist on type 'readonly [string, number]'.
console.log(tuples); // Output: ["Alice", 30]

const tuple = [1, "hello"] as const;
// tuple.push("world"); // Property 'push' does not exist on type 'readonly [1, "hello"]'.
console.log(tuple); // Output: [1, "hello"]

const tuple2: [number, string] = [1, "hello"];

tuple2.push("world");
console.log(tuple2); // Output: [1, "hello", "world"]
