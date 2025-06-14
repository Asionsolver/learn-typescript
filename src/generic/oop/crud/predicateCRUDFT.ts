interface Identifier {
  id: number;
}

class CRUDFT<T extends Identifier> {
  private items: T[] = [];

  add(item: T): void {
    const exists = this.items.some((existing) => existing.id === item.id);
    if (exists) {
      throw new Error(`Item with id ${item.id} already exists.`);
    }
    this.items.push(item);
  }

  // This batchAdd method main problem is it can not detect duplicate items
  // batchAdd(items: T[]): void {
  //   //  Check for duplicates before adding
  //   // ✅ Basic Validation (Recommended)
  //   // const duplicate = items.filter((newItem) => {
  //   //   this.items.some((existing) => existing.id === newItem.id);
  //   // });
  //   // ✅ Silent Filtering (Skip Duplicates) also add return type number
  //   // const uniqueItem = items.filter((newItem) => {
  //   //   this.items.some((existingId) => existingId.id === newItem.id);
  //   // });
  //   // this.items.push(...uniqueItem);
  //   // return uniqueItem;
  //   // 🚀 Using Set for Performance (Best for Large Datasets)
  //   const existingIds = new Set(this.items.map((item) => item.id));
  //   const duplicate = items.filter((item) => existingIds.has(item.id));
  //   if (duplicate.length > 0) {
  //     throw new Error(
  //       `This Duplicates ID ${duplicate
  //         .map((individual) => individual.id)
  //         .join(", ")} already exits`
  //     );
  //   }
  //   this.items.push(...items);
  // }

  // 🚀🔥  Solution 1: Combined Duplicate Detection (Best)

  // ✔️ Benefits:

  // 🕵️‍♂️ Checks existing and incoming duplicates

  // 🚀 Efficient: uses Set (O(1) lookups)

  // ✅ Maintains correctness

  batchAdd(items: T[]): void {
    const existingIds = new Set(this.items.map((item) => item.id));
    // console.log("Existing Id: ", existingIds);
    const newIds = new Set<number>();

    const duplicateIds: number[] = [];

    for (const item of items) {
      if (existingIds.has(item.id) || newIds.has(item.id)) {
        duplicateIds.push(item.id);
        // console.log("Duplicate Id: ", duplicateIds);
      } else {
        newIds.add(item.id);
        // console.log("New Id: ", newIds);
      }
    }
    if (duplicateIds.length > 0) {
      throw new Error(`Duplicate IDs found: ${duplicateIds.join(", ")}`);
    }
    // console.log("New id: ", newIds);
    this.items.push(...items);
  }
  // ✅ Solution 2: Pre-merge all IDs and check for duplicates
  // ✔️ Benefits:

  // 😎 Very concise
  // 🧐 Checks for all duplicates in one pass

  // batchAdd(items: T[]): void {
  //   const allIds = [
  //     ...this.items.map((item) => item.id),
  //     // ...items.map((item) => item.id), // this items all only batch add
  //   ];
  //   // console.log("All Ids:", allIds);

  //   const seen = new Set<number>();

  //   const duplicateIds = allIds.filter((id) => {
  //     if (seen.has(id)) {
  //       return true;
  //     }
  //     seen.add(id);
  //     return false;
  //   });
  //   // console.log("Seen Ids: ", seen);

  //   if (duplicateIds.length > 0) {
  //     throw new Error(
  //       `Duplicate IDs detected: ${[...new Set(duplicateIds)].join(", ")}`
  //     );
  //   }
  //   this.items.push(...items);
  // }

  getItemId(id: T["id"]): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAllItems(): T[] {
    return { ...this.items };
  }

  /**
   * Batch update items matching predicate
   * @param predicate Filter condition
   * @param updater Update function
   * @returns Number of updated items
   */

  updateBatch(
    predicate: (item: T) => boolean,
    updater: (item: T) => Partial<T>
  ): number {
    let updateCount = 0;

    this.items = this.items.map((item) => {
      if (predicate(item)) {
        updateCount++;
        return { ...item, ...updater(item) };
      }
      return item;
    });

    return updateCount;
  }

  /**
   * Batch delete items matching predicate
   * @param predicate Filter condition
   * @returns Number of deleted items
   */

  batchDelete(predicate: (items: T) => boolean): number {
    const initialItemsLength = this.items.length;

    this.items = this.items.filter((item) => !predicate(item));
    return initialItemsLength - this.items.length;
  }
  /**
   * Get all items matching predicate
   * @param predicate Filter condition
   * @returns Filtered array of items
   */

  batchFilter(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
  /**
   * Toggle boolean field for matching items
   * @param predicate Filter condition
   * @param field Boolean field to toggle
   * @returns Number of affected items
   */

  batchToggle(
    predicate: (item: T) => boolean,
    field: keyof Pick<
      T,
      { [K in keyof T]: T[K] extends boolean ? K : never }[keyof T]
    >
  ): number {
    return this.updateBatch(
      predicate,
      (item) =>
        ({
          [field]: !item[field],
        } as Partial<T>)
    );
  }
}

interface UsersInfo extends Identifier {
  name: string;
  email: string;
  address: string;
  active: boolean;
}

const predicateCRUDFT = new CRUDFT<UsersInfo>();

predicateCRUDFT.add({
  id: 1,
  name: "ashis",
  email: "ashis@gmail.com",
  address: "Bangladesh",
  active: true,
});
predicateCRUDFT.add({
  id: 2,
  name: "ashis",
  email: "ashis@gmail.com",
  address: "India",
  active: false,
});

predicateCRUDFT.batchAdd([
  {
    id: 3,
    name: "asion",
    email: "asion@gmail.com",
    address: "Nepal",
    active: true,
  },
  {
    id: 4,
    name: "asis",
    email: "asis@gmail.com",
    address: "India",
    active: false,
  },
  {
    id: 5,
    name: "pretom",
    email: "pretom@gmail.com",
    address: "USA",
    active: false,
  },
  {
    id: 6,
    name: "pithijit",
    email: "pithijit@gmail.com",
    address: "India",
    active: true,
  },
  {
    id: 7,
    name: "Clean",
    email: "pithijit@gmail.com",
    address: "Bangladesh",
    active: true,
  },
]);

predicateCRUDFT.batchAdd([
  {
    id: 8,
    name: "new1",
    email: "new1@example.com",
    address: "USA",
    active: true,
  },
  {
    id: 9,
    name: "new2",
    email: "new2@example.com",
    address: "UK",
    active: false,
  },
]);

// console.log(predicateCRUDFT.getItemId(1));
// console.log(predicateCRUDFT.getAllItems());
// console.log(
//   predicateCRUDFT.updateById(6, {
//     name: "Chill",
//   })
// );

// Update email domain for specific users
const TotalUpdatedCount = predicateCRUDFT.updateBatch(
  (user) => user.email.endsWith("@gmail.com"),
  (user) => ({
    email: user.email.replace("@gmail.com", "@company.com"),
  })
);

// Deactivate all users from Bangladesh
// const TotalUpdatedCount = predicateCRUDFT.batchUpdate(
//   user => user.address === "Bangladesh",
//   user => ({ active: false })
// );

// const inactiveUserIds = predicateCRUDFT
//   .getAllItems()
//   .filter((user) => !user.active)
//   .map((user) => user.id);

// const TotalDeletedCount = batchRepo.deleteBatch(inactiveUserIds);

// Delete all inactive users
// const TotalDeletedCount = predicateCRUDFT.batchDelete((user) => !user.active);

console.log(predicateCRUDFT.getAllItems());
console.log("Total item Update: ", TotalUpdatedCount);
// console.log(`Deleted ${TotalDeletedCount} inactive users`);

// Get all active users
const activeUsers = predicateCRUDFT.batchFilter((user) => user.active);
console.log("Active users:", activeUsers);

// Deactivate Bangladesh users and log their names
predicateCRUDFT.updateBatch(
  (user) => user.address === "Bangladesh",
  (user) => {
    console.log(`Deactivating ${user.name}`);
    return { active: false };
  }
);

// Toggle active status for users with names starting with 'a'
const toggledCount = predicateCRUDFT.batchToggle(
  (user) => user.name.toLowerCase().startsWith("a"),
  "active"
);
console.log(`Toggled ${toggledCount} users`);
