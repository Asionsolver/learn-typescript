// Pick
type Person = {
  name: string;
  age: number;
  email?: string;
  phone: string;
  address?: string;
};

type PersonName = Pick<Person, "name">;
type PersonNameAndAge = Pick<Person, "name" | "age">;

// Omit
type ContactInfo = Omit<Person, "name" | "age">;

// require
type RequiredPerson = Required<Person>;

// Partial
type PartialPerson = Partial<Person>;

// Readonly
type MobileInfo = Readonly<{
  brand: string;
  model: string;
  year: number;
}>;

const myPhone: MobileInfo = {
  brand: "Apple",
  model: "iPhone 14",
  year: 2022,
};

// myPhone.brand = "Samsung"; // Error: Cannot assign to 'brand' because it is a read-only property

// Record
type PhoneBook = Record<string, string | number | boolean | undefined>;
const phoneBook: PhoneBook = {
  name: "John Doe",
  age: 30,
  phone: "123-456-7890",
  email: "john.doe@example.com",
  address: "123 Main St, Anytown, USA",
  isActive: true,
};
