interface Identifier {
  id: number;
}

class BatchRepo<T extends Identifier> {
  private items: T[] = [];

  add(item: T): void {
    const exists = this.items.some((existing) => existing.id === item.id);
    if (exists) {
      throw new Error(`Item with id ${item.id} already exists.`);
    }
    this.items.push(item);
  }

  getItemId(id: T["id"]): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return [...this.items];
  }

  updateById(id: T["id"], updateData: Partial<Omit<T, "id">>): T | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;

    const updateItem: T = {
      ...this.items[index],
      ...updateData,
    } as T;
    this.items[index] = updateItem;
    return updateItem;
  }
  /**
   * Update multiple items at once
   * @param updates Array of objects containing id and partial data to update
   * @returns Number of successfully updated items
   */
  updateBatch(
    updates: Array<{ id: T["id"]; data: Partial<Omit<T, "id">> }>
  ): number {
    return updates.reduce((count, { id, data }) => {
      return this.updateById(id, data) ? count + 1 : count;
    }, 0);
  }

  /**
   * Delete multiple items by their IDs
   * @param ids Array of IDs to delete
   * @returns Number of deleted items
   */

  deleteBatch(ids: T["id"][]): number {
    const initialItemsLength = this.items.length;
    this.items = this.items.filter((item) => !ids.includes(item.id));
    return initialItemsLength - this.items.length;
  }
}

interface UsersInfo extends Identifier {
  name: string;
  email: string;
  address: string;
  active: boolean;
}

const batchRepo = new BatchRepo<UsersInfo>();

batchRepo.add({
  id: 1,
  name: "ashis",
  email: "ashis@gmail.com",
  address: "Bangladesh",
  active: true,
});

batchRepo.add({
  id: 2,
  name: "asion",
  email: "asion@gmail.com",
  address: "Bangladesh",
  active: true,
});

batchRepo.add({
  id: 3,
  name: "asis",
  email: "asis@gmail.com",
  address: "Bangladesh",
  active: false,
});

batchRepo.add({
  id: 4,
  name: "pretom",
  email: "pretom@gmail.com",
  address: "Bangladesh",
  active: false,
});

batchRepo.add({
  id: 5,
  name: "pithijit",
  email: "pithijit@gmail.com",
  address: "Bangladesh",
  active: true,
});
batchRepo.add({
  id: 6,
  name: "Clean",
  email: "pithijit@gmail.com",
  address: "Bangladesh",
  active: true,
});

// console.log(batchRepo.getItemId(1));
console.log(
  batchRepo.updateById(6, {
    name: "Chill",
  })
);

// Update multiple users at once
const updatedCount = batchRepo.updateBatch([
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

// Delete multiple users by ID
const deletedCount = batchRepo.deleteBatch([1, 2, 99]);
console.log(batchRepo.getAll());

console.log(`Updated ${updatedCount} users`); //Updated 2 users
console.log(`Deleted ${deletedCount} users`); //
