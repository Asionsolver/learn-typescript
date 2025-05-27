interface Indicator {
  id: number;
}

class CallbackGenericRepo<T extends Indicator> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getItem(id: T["id"]): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  update(id: T["id"], updateData: (item: T) => T): T | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return undefined;
    }
    this.items[index] = updateData(this.items[index] as T);
    return this.items[index];
  }
  delete(predicate: (item: T) => boolean): number {
    const initialLength = this.items.length;
    this.items = this.items.filter((item) => !predicate(item));
    return initialLength - this.items.length;
  }
}

interface CallBackUserInfo extends Indicator {
  name: string;
  email: string;
  address: string;
}

const callbacksRepo = new CallbackGenericRepo<CallBackUserInfo>();

callbacksRepo.add({
  id: 1,
  name: "asion",
  email: "asion@gmail.com",
  address: "Bangladesh",
});
callbacksRepo.add({
  id: 2,
  name: "ashis",
  email: "solver@gmail.com",
  address: "Bangladesh",
});
callbacksRepo.add({
  id: 3,
  name: "ashis",
  email: "ashis@gmail.com",
  address: "Bangladesh",
});

callbacksRepo.add({
  id: 4,
  name: "assion",
  email: "ashis@gmail.com",
  address: "Bangladesh",
});

callbacksRepo.add({
  id: 5,
  name: "night man",
  email: "tildi@gmail.com",
  address: "Bangladesh",
});

callbacksRepo.add({
  id: 6,
  name: "dark",
  email: "dark@gmail.com",
  address: "Bangladesh",
});

// Update
callbacksRepo.update(4, (user) => ({
  ...user,
  name: "Pritom",
  email: "pritom@gmail.com",
}));
callbacksRepo.update(5, (user) => ({
  ...user,
  name: "Prithijit",
  email: "prithijit@gmail.com",
}));
callbacksRepo.update(6, (user) => ({
  ...user,
  name: "Dark Night",
  email: "darkNight@gmail.com",
  address: "USA",
}));
// Delete
callbacksRepo.delete((user) => user.name.startsWith("a"));
callbacksRepo.delete((user) => user.id === 4);
callbacksRepo.delete((user) => user.address === "Bangladesh");
// callbacksRepo.delete(5);
// callbacksRepo.delete(6);

console.log(callbacksRepo.getItem(1));
console.log(callbacksRepo.getItem(2));
console.log(callbacksRepo.getItem(3));
console.log(callbacksRepo.getItem(4));
console.log(callbacksRepo.getItem(5));
console.log(callbacksRepo.getItem(6));
