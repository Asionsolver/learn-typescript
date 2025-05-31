class AnimalInfo {
  move() {
    console.log("Moving...");
  }
}

class DogInformation extends AnimalInfo {
  // Dog inherits `move()`
  bark() {
    console.log("Woof!");
  }
}

const dogObj = new DogInformation();
dogObj.move(); // "Moving..." (inherited)
dogObj.bark(); // "Woof!"
