// Direct Approach
interface Identifier {
  id: number;
}

class GenericRepository<T extends Identifier> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getItem(id: T["id"]): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  // Update item (basic implementation)

  //   update(id: T["id"], updateData: Partial<T>): T | undefined {
  //     const index = this.items.findIndex((item) => item.id === id);
  //     if (index === -1) return undefined;
  //     //! error: Type '{ id?: number | undefined; } & Partial<T>' is not assignable to type 'T'. 'T' could be instantiated with an arbitrary type which could be unrelated to '{ id?: number | undefined; } & Partial<T>'.
  //     this.items[index] = {
  //       ...this.items[index],
  //       ...updateData,
  //     };

  //     return this.items[index];
  //   }

  //   ✅ Option 1: Use a type assertion
  // If you're sure the merged result satisfies T, you can assert it:

  // 🟢 Quick fix
  // 🟠 Risk: You bypass type checking, so be sure your logic is safe.

  //   update(id: T["id"], updateData: Partial<T>): T | undefined {
  //     const index = this.items.findIndex((item) => item.id === id);
  //     if (index === -1) return undefined;
  //     this.items[index] = {
  //       ...this.items[index],
  //       ...updateData,
  //     } as T;

  //     return this.items[index];
  //   }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //   ✅ Option 2: Create a helper function to ensure type safety
  // Define a mergeItem helper that guarantees the output is of type T:
  //   ✅ This helps keep type inference clearer, though it may still internally behave like a type assertion.

  //   private mergeItem(original: T, updates: Partial<T>): T {
  //     return { ...original, ...updates };
  //   }

  //   update(id: T["id"], updateData: Partial<T>): T | undefined {
  //     const index = this.items.findIndex((item) => item.id === id);

  //     //! Error: Argument of type 'T | undefined' is not assignable to parameter of type 'T'.'T' could be instantiated with an arbitrary type which could be unrelated to 'T | undefined'
  //     // const updateItem = this.mergeItem(this.items[index], updateData);
  //     // ✅ Solution 1: Use a non-null assertion (!)
  //     // Tell TypeScript “this value is definitely not undefined”:
  //     // ✅ Quickest and safest fix — because you already check index === -1
  //     // 🛑 Still assumes items[index] is never undefined for a valid index
  //     // const updateItem = this.mergeItem(this.items[index]!, updateData);

  //     // ✅ Solution 2: Assign it to a variable and check explicitly
  //     // If you want maximum type safety without using !:
  //     // ✅ Fully type-safe and preferred when you want stricter checking.
  //     // const item = this.items[index];
  //     // if (!item) return undefined;
  //     // ✅ Best Recommended Solution (Safe, Clean, TypeScript-Friendly)
  //     // ✅ Why This Is the Best Solution
  //     // Feature	Explanation
  //     // 🔒 Immutable id	--->id is protected from accidental overwrite in update method.
  //     // 💯 Type-safe merging   --->	Uses Partial<Omit<T, "id">> to avoid unsafe casting.
  //     // ✅ Safe array access   --->	Explicitly checks that item is not undefined.
  //     // 🧼 Clean and reusable code	 --->  Separates merge logic into a private mergeItem() function.
  //     const item = this.items[index];
  //     if (index === -1 || !item) return undefined;
  //     const updateItem = this.mergeItem(item, updateData);
  //     this.items[index] = updateItem;
  //     return updateItem;
  //   }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ✅ Option 3: Use a mapped type helper to enforce required fields
  // Another strict approach is to restrict updates not to touch id, which shouldn’t be changed.
  // ✅ Safer: avoids modifying id
  // 🛡️ Enforces immutability on key fields
  //   update(id: T["id"], updateData: Omit<Partial<T>, "id">): T | undefined {
  //     const index = this.items.findIndex((item) => item.id === id);
  //     if (index === -1) {
  //       return undefined;
  //     }
  //     const updateItem = { ...this.items[index], ...updateData } as T;
  //     this.items[index] = updateItem;
  //     return updateItem;
  //   }

  // 🚀 Recommended Implementation Using Omit<Partial<T>, "id"> and as T
  // ✅ Why this works well
  // ✅ Prevents accidental modification of id

  // ✅ Keeps T generic and flexible

  // ✅ Minimal type assertions

  // ✅ Safe and predictable in common real-world use cases

  update(id: T["id"], updateData: Omit<Partial<T>, "id">): T | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;
    const updateItem: T = {
      ...this.items[index],
      ...updateData,
    } as T;
    this.items[index] = updateItem;
    return updateItem;
  }

  // Delete item (basic implementation)
  delete(id: T["id"]): boolean {
    const initialItemsLength = this.items.length;
    this.items = this.items.filter((item) => item.id !== id);
    return this.items.length < initialItemsLength;
  }
}

interface UserInfos extends Identifier {
  //   id: number;
  name: string;
  email: string;
  address: string;
}

const genericRepo = new GenericRepository<UserInfos>();

genericRepo.add({
  id: 1,
  name: "asion",
  email: "asion@gmail.com",
  address: "Bangladesh",
});
genericRepo.add({
  id: 2,
  name: "ashis",
  email: "solver@gmail.com",
  address: "Bangladesh",
});
genericRepo.add({
  id: 3,
  name: "ashis",
  email: "ashis@gmail.com",
  address: "Bangladesh",
});

genericRepo.add({
  id: 4,
  name: "assion",
  email: "ashis@gmail.com",
  address: "Bangladesh",
});

genericRepo.add({
  id: 5,
  name: "night man",
  email: "tildi@gmail.com",
  address: "Bangladesh",
});

genericRepo.add({
  id: 6,
  name: "dark",
  email: "dark@gmail.com",
  address: "Bangladesh",
});

// Update
genericRepo.update(4, { name: "Pritom", email: "pritom@gmail.com" });
genericRepo.update(5, { name: "Prithijit", email: "prithijit@gmail.com" });
genericRepo.update(6, {
  name: "Dark Night",
  email: "darkNight@gmail.com",
  address: "USA",
});

// Delete
genericRepo.delete(4);
genericRepo.delete(5);
genericRepo.delete(6);

// console.log(genericRepo.getItem(1));
// console.log(genericRepo.getItem(2));
// console.log(genericRepo.getItem(3));
console.log(genericRepo.getItem(4));
console.log(genericRepo.getItem(5));
console.log(genericRepo.getItem(6));
