class Persons {
  constructor(
    public name: string,
    public age: number,
    public addresses: string
  ) {}
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
  getDetails() {
    console.log(`${this.name}, Age: ${this.age}, Address: ${this.addresses}`);
  }
  sleepHours(hours: number) {
    console.log(`${this.name} sleeps for ${hours} hours.`);
  }
}

class Student extends Persons {
  constructor(
    public name: string,
    public age: number,
    public addresses: string,
    public grade: string
  ) {
    super(name, age, addresses);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
  takeExam() {
    console.log(`${this.name} is taking an exam.`);
  }
  getDetails() {
    console.log(
      `${this.name}, Age: ${this.age}, Address: ${this.address}, Grade: ${this.grade}`
    );
  }
}

const student1 = new Student("Alice", 20, "123 Main St", "A");
student1.study(); // "Alice is studying."
student1.takeExam(); // "Alice is taking an exam."
student1.getDetails(); // "Alice, Age: 20, Address: 123 Main St, Grade: A"
student1.sleepHours(8); // "Alice sleeps for 8 hours."

class Teacher extends Persons {
  constructor(
    public name: string,
    public age: number,
    public designation: string,
    public subject: string,
    public addresses: string
  ) {
    super(name, age, addresses);
    this.designation = designation;
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
  gradePapers() {
    console.log(`${this.name} is grading papers.`);
  }
  getDetails() {
    console.log(
      `${this.name}, Age: ${this.age}, Designation: ${this.designation}, Address: ${this.addresses}, Subject: ${this.subject}`
    );
  }

  noOfClasses(noOfClasses: number) {
    console.log(`${this.name} has ${noOfClasses} classes.`);
  }
}

const teacher1 = new Teacher(
  "Mr. Smith",
  40,
  "Senior Teacher",
  "Mathematics",
  "456 Elm St"
);
teacher1.greet(); // "Hello, my name is Mr. Smith."
teacher1.teach(); // "Mr. Smith is teaching Mathematics."
teacher1.gradePapers(); // "Mr. Smith is grading papers."
teacher1.getDetails(); // "Mr. Smith, Age: 40, Designation: Senior Teacher, Address: 456 Elm St, Subject: Mathematics"
teacher1.sleepHours(7); // "Mr. Smith sleeps for 7 hours."
teacher1.noOfClasses(5); // "Mr. Smith has 5 classes."
