// function createArray(value: string): string[] {
//   return [value];
// }

// const stringArray = createArray("Hello");
// console.log(stringArray); // Output: ["Hello"]

// const createGenericArray = <T>(value: T): T[] => {
//   return [value];
// };

// const stringGenericArray = createGenericArray<string>("Hello");
// console.log(stringGenericArray); // Output: ["Hello"]

// const numberGenericArray = createGenericArray<number>(42);
// console.log(numberGenericArray); // Output: [42]
// const booleanGenericArray = createGenericArray<boolean>(true);
// console.log(booleanGenericArray); // Output: [true]

// interface MyObject {
//   key: string;
//   value: number;
// }
// const objectGenericArray = createGenericArray<MyObject>({
//   key: "value",
//   value: 42,
// });
// console.log(objectGenericArray); // Output: [{ key: "value", value: 42 }]
// const arrayGenericArray = createGenericArray<number[]>([1, 2, 3]);
// console.log(arrayGenericArray); // Output: [[1, 2, 3]]
// const tupleGenericArray = createGenericArray<[number, string, boolean]>([
//   1,
//   "two",
//   true,
// ]);
// console.log(tupleGenericArray); // Output: [[1, "two", true]]

// const createGenericTuple = <T, U>(value: [T, U]): [T, U] => {
//   return [value[0], value[1]];
// };

// const tupleGeneric = createGenericTuple<string, number>(["Hello", 42]);
// console.log(tupleGeneric); // Output: ["Hello", 42]
// const tupleGeneric2 = createGenericTuple<boolean, string>([true, "World"]);
// console.log(tupleGeneric2); // Output: [true, "World"]
// const tupleGeneric3 = createGenericTuple<number, boolean>([100, false]);
// console.log(tupleGeneric3); // Output: [100, false]
// const tupleGeneric4 = createGenericTuple<[number, string], boolean>([
//   [1, "two"],
//   true,
// ]);
// console.log(tupleGeneric4); // Output: [[1, "two"], true]
// const tupleGeneric5 = createGenericTuple<string[], number>([
//   ["one", "two", "three"],
//   3,
// ]);
// console.log(tupleGeneric5); // Output: [["one", "two", "three"], 3]
// const tupleGeneric6 = createGenericTuple<null, undefined>([null, undefined]);
// console.log(tupleGeneric6); // Output: [null, undefined]
// const tupleGeneric7 = createGenericTuple<{}, {}>([{ key: "value" }, {}]);
// console.log(tupleGeneric7); // Output: [{ key: "value" }, {}]
// const tupleGeneric8 = createGenericTuple<[], []>([[], []]);
// console.log(tupleGeneric8); // Output: [[], []]
// const tupleGeneric9 = createGenericTuple<bigint, symbol>([
//   BigInt(12345678901234567890),
//   Symbol("unique"),
// ]);
// console.log(tupleGeneric9); // Output: [12345678901234567890n, Symbol(unique)]
// const tupleGeneric10 = createGenericTuple<Function, Date>([
//   () => console.log("Hello"),
//   new Date(),
// ]);
// console.log(tupleGeneric10); // Output: [Function, Date]
// interface CustomType {
//   id: number;
//   name: string;
// }

// interface AnotherType {
//   description: string;
//   isActive: boolean;
// }
// const tupleGeneric11 = createGenericTuple<CustomType, AnotherType>([
//   { id: 1, name: "Item 1" },
//   { description: "This is a custom type", isActive: true },
// ]);
// console.log(tupleGeneric11); // Output: [{ id: 1, name: "Item 1" }, { description: "This is a custom type", isActive: true }]
// const tupleGeneric12 = createGenericTuple<CustomType[], AnotherType[]>([
//   [
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//   ],
//   [
//     { description: "First item", isActive: true },
//     { description: "Second item", isActive: false },
//   ],
// ]);
// console.log(tupleGeneric12); // Output: [[{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }], [{ description: "First item", isActive: true }, { description: "Second item", isActive: false }]]

interface Course {
  id: number;
  name: string;
  duration: string;
  fee: number;
  teacher: string[];
  students: Student[];
}

interface Student {
  s_id: number;
  name: string;
  age: number;
  email: string;
  devTypes?: string[];
  isActive: boolean;
  address: {
    zip: string;
    city: string;
    state: string;
    street: string;
  };
}
const addCourseToStudents = <T extends Student>(students: T[]): Course => {
  const course: Course = {
    id: 1,
    name: "Next Level TypeScript",
    duration: "3 months",
    fee: 50000,
    teacher: ["John Doe", "Jane Smith"],
    students: students,
  };

  return course;
};

const studentOne: Student = {
  s_id: 1,
  name: "Alice",
  age: 20,
  email: "alice@example.com",
  devTypes: ["Frontend", "Backend"],
  isActive: true,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    state: "CA",
    zip: "12345",
  },
};

const studentTwo: Student = {
  s_id: 2,
  name: "Bob",
  age: 22,
  email: "bob@example.com",
  devTypes: ["Frontend", "Backend", "AI"],
  isActive: true,
  address: {
    street: "456 Elm St",
    city: "Wonderland",
    state: "CA",
    zip: "12345",
  },
};

const studentThree: Student = {
  s_id: 3,
  name: "Charlie",
  age: 21,
  email: "charlie@example.com",
  devTypes: ["Backend"],
  isActive: true,
  address: {
    street: "789 Oak St",
    city: "Wonderland",
    state: "CA",
    zip: "12345",
  },
};

const studentFour: Student = {
  s_id: 4,
  name: "David",
  age: 23,
  email: "david@example.com",
  devTypes: ["Frontend"],
  isActive: true,
  address: {
    street: "101 Pine St",
    city: "Wonderland",
    state: "CA",
    zip: "12345",
  },
};

const studentFive: Student = {
  s_id: 5,
  name: "Eve",
  age: 19,
  email: "eve@example.com",
  devTypes: ["Frontend", "Backend"],
  isActive: true,
  address: {
    street: "102 Maple St",
    city: "Wonderland",
    state: "CA",
    zip: "12345",
  },
};

const addedCourseToStudent = addCourseToStudents([
  studentOne,
  studentTwo,
  studentThree,
  studentFour,
  studentFive,
]);
console.log(addedCourseToStudent);
