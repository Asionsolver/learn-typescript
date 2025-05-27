interface Identifier {
  id: number;
}

class CRUDOperationOptimization<T extends Identifier> {
  private items: T[] = [];

  add(item: T): void {
    const exist = this.items.some((existing) => existing.id === item.id);
    if (exist) {
      throw new Error(`This items ID ${item.id} already exits`);
    }
    this.items.push(item);
  }

  getItemId(id: T["id"]): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  updateById(id: T["id"], updateData: Partial<Omit<T, "id">>): T | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return undefined;
    }

    const updateItem: T = { ...this.items[index], ...updateData } as T;

    this.items[index] == updateItem;
    return updateItem;
  }
  //updates: Array<{ id: T['id']; updates: Partial<Omit<T, "id">> }>
  batchUpdate(
    ids: Array<{ id: T["id"]; data: Partial<Omit<T, "id">> }>
  ): number {
    const idMap = new Map(ids.map((update) => [update.id, update.data]));
    let updatedCount = 0;
    this.items = this.items.map((item) => {
      if (idMap.has(item.id)) {
        updatedCount++;
        return { ...item, ...idMap.get(item.id) };
      }
      return item;
    });

    return updatedCount;
  }

  batchDelete(ids: T["id"][]): number {
    const initialItemsLength = this.items.length;
    this.items = this.items.filter((item) => !ids.includes(item.id));
    return initialItemsLength - this.items.length;
  }

  getAllItems(): T[] {
    return { ...this.items };
  }
}

interface UsersInfo extends Identifier {
  name: string;
  email: string;
  address: string;
  active: boolean;
}

const optimizationBatchOperation = new CRUDOperationOptimization<UsersInfo>();

optimizationBatchOperation.add({
  id: 1,
  name: "ashis",
  email: "ashis@gmail.com",
  address: "Bangladesh",
  active: true,
});

optimizationBatchOperation.add({
  id: 2,
  name: "asion",
  email: "asion@gmail.com",
  address: "Bangladesh",
  active: true,
});

optimizationBatchOperation.add({
  id: 3,
  name: "asis",
  email: "asis@gmail.com",
  address: "Bangladesh",
  active: false,
});

optimizationBatchOperation.add({
  id: 4,
  name: "pretom",
  email: "pretom@gmail.com",
  address: "Bangladesh",
  active: false,
});

optimizationBatchOperation.add({
  id: 5,
  name: "pithijit",
  email: "pithijit@gmail.com",
  address: "Bangladesh",
  active: true,
});
optimizationBatchOperation.add({
  id: 6,
  name: "Clean",
  email: "pithijit@gmail.com",
  address: "Bangladesh",
  active: true,
});

// console.log(optimizationBatchOperation.getItemId(1));
// console.log(
//   optimizationBatchOperation.updateById(6, {
//     name: "Chill",
//   })
// );

// Update multiple users at once
const updatedCounts = optimizationBatchOperation.batchUpdate([
  {
    id: 1,
    data: { name: "Ashis Kumar", email: "ashis.kumar@example.com" },
  },
  {
    id: 2,
    data: { active: false, address: "Dhaka, Bangladesh" },
  },
  {
    id: 99, // Non-existent ID will be skipped
    data: { name: "Invalid" },
  },
]);

console.log(optimizationBatchOperation.getAllItems());
const deletedCounts = optimizationBatchOperation.batchDelete([1, 2, 99]);
console.log(optimizationBatchOperation.getAllItems());
console.log(`Updated ${updatedCounts} users`);
console.log(`Deleted ${deletedCounts} users`);
