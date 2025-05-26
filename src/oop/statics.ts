class Count {
  static count: number = 0;
  static increment() {
    return ++Count.count;
  }
  static decrement() {
    return --Count.count;
  }
}

// const count1 = new Count();
console.log(Count.increment());
console.log(Count.increment());
console.log(Count.decrement());
console.log(Count.increment());

// const count2 = new Count();
console.log(Count.increment());
console.log(Count.increment());
console.log(Count.decrement());
console.log(Count.increment());
