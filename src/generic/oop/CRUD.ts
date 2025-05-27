// class Repository<T > {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   getItem(id: keyof T): T | undefined {
//     //Element implicitly has an 'any' type because expression of type '"id"' can't be used to index type 'unknown'. Property 'id' does not exist on type 'unknown'.
//     return this.items.find((item) => item["id"]=== id));
//   }
// }

// interface UserInfo {
//   id: number;
//   name: string;
// }

// const userRepo = new Repository<UserInfo>();
// userRepo.add({
//   id: 1,
//   name: "ashis",
// });

// // Argument of type '1' is not assignable to parameter of type 'keyof UserInfo'.
// console.log(userRepo.getItem(1));

// 🚀 Best Practice Recommendation

// 👉 Clearly defines that stored items must have an id
// 👉 Allows different ID types (number, string, etc.
// 👉 Maintains full type safety
// 👉 Provides clean, self-documenting code

interface Identifiable<K = number> {
  id: K;
}

class Repository<T extends Identifiable<K>, K = number> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getItem(id: K): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

interface UserInfo extends Identifiable<number> {
  name: string;
}

const userRepo = new Repository<UserInfo>();

// ✅ Solution 1: Constrain T to Have an id Property (Recommended)
// Pros: Type-safe, clear intent
// Cons: Slightly more complex type parameters

// interface ID<K> {
//   id: K;
//   //   name: K;
// }
// class Repository<T extends ID<K>, K> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   getItem(id: K): T | undefined {
//     return this.items.find((item) => item["id"] === id);
//   }
// }

// interface UserInfo {
//   id: number;
//   name: string;
// }

// const userRepo = new Repository<UserInfo, number>();

// class Repository<T extends { name: K }, K> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   getItem(name: K): T | undefined {
//     return this.items.find((item) => item["name"] === name);
//   }
// }

// interface UserInfo {
//   id: number;
//   name: string;
// }

// const userRepo = new Repository<UserInfo, string>();
// userRepo.add({
//   id: 1,
//   name: "ashis",
// });

// userRepo.add({
//   id: 2,
//   name: "asion",
// });

// userRepo.add({
//   id: 3,
//   name: "asis",
// });

// console.log(userRepo("ashis"));

// ✅ Solution 2: Use a Generic Type Constraint
// Pros: Cleaner, works for any identifiable type
// Cons: Less flexible if you need different key names

// interface Identifiable {
//   id: number;
// }

// class Repository<T extends Identifiable> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   getItem(id: T["id"]): T | undefined {
//     return this.items.find((item) => item.id === id);
//   }
// }
// interface UserInfo {
//   id: number;
//   name: string;
// }
// const userRepo = new Repository<UserInfo>();

// ✅ Solution 3: Make the Key Name Configurable
// class Repository<T, K extends keyof T> {
//   private items: T[] = [];
//   constructor(private keyName: K) {}
//   add(item: T) {
//     this.items.push(item);
//   }
//   getItem(id: T[K]): T | undefined {
//     return this.items.find((item) => item[this.keyName] === id);
//   }
// }
// const userRepo = new Repository<UserInfo, "id">("id");

// ❌ Solution 4: Type Assertion (Quick Fix, Not Recommended)
// Pros: Quick to implement
// Cons: Loses type safety, defeats TypeScript's purpose
// class Repository<T> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   getItem(id: any): T | undefined {
//     return this.items.find((item) => (item as any).id === id);
//   }
// }
// interface UserInfo {
//   id: number;
//   name: string;
// }
// const userRepo = new Repository<UserInfo>();

userRepo.add({
  id: 1,
  name: "ashis",
});

userRepo.add({
  id: 2,
  name: "asion",
});

userRepo.add({
  id: 3,
  name: "asis",
});

console.log(userRepo.getItem(3));
