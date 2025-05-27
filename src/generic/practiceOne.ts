// function getFirstElement(arr: (string | number)[]) {
//   return arr[0];
// }

// const numbers: number[] = [1, 2, 3];
// const strings: string[] = ["a", "b", "c"];

// console.log(getFirstElement(numbers)); // Output: 1
// console.log(getFirstElement(strings)); // Output: 'a'

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

function getLastElement<T>(arr: T[]) {
  return arr[arr.length - 1];
}

const numbers: number[] = [1, 2, 3];
console.log(getFirstElement(numbers)); // Output: 1
const strings: string[] = ["a", "b", "c"];
console.log(getFirstElement(strings)); // Output: 'a'
const booleans: boolean[] = [true, false, true];
console.log(getFirstElement(booleans)); // Output: true
const mixed: (string | number | boolean)[] = [1, "a", true];
console.log(getFirstElement(mixed));
const objects: { name: string; age: number }[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
console.log(getFirstElement(objects)); // Output: { name: 'Alice', age: 30 }
const dates: Date[] = [new Date("2023-01-01"), new Date("2023-02-01")];
console.log(getFirstElement(dates)); // Output: 2023-01-01T00:00:00.000Z
const mixedArray: (
  | string
  | number
  | boolean
  | { name: string; age: number }
)[] = [42, "hello", true, { name: "Charlie", age: 28 }];
console.log(getLastElement(mixedArray)); // Output: { name: 'Charlie', age: 28 }
