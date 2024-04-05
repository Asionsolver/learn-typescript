// interface RectangleOption{
//     width: number; 
//     length: number;
// }

// function drawRectangel(options: RectangleOption){
//     let width = options.width;
//     let length = options.length;
// }

// let threeDimentionValue = {
//     width: 30,
//     length: 56,
//     height: 45,
// }

// drawRectangel(threeDimentionValue)


// Type One

// interface IsStudent{
//     id: number;
//     name: string;
//     age: number;

//     info(): string;
// }


// class Student implements IsStudent {
//   constructor(
//     readonly id: number,
//     public name: string,
//     public age: number,
//   ) {}

//   info() {
//     return `${this.name} from ${this.id} is access this classroom and his age is ${this.age}!`;
//   }
// }


// const ashis = new Student(1 , "Ashis", 40);
// const asis = new Student(2, "Asis", 20);
   
// let asion: IsStudent;
// asion = new Student(3, "Asion", 26);

// const students: Student[] = [];
// students.push(ashis, asis, asion)

// console.log(students);




// Type Two

// interface IsStudent{
//     id: number;
//     name: string;
//     age: number;

//     info(): void;
// }


// class Student implements IsStudent {
//   constructor(
//     readonly id: number,
//     public name: string,
//     public age: number,
//   ) {}

//   info() {
//     console.log(`${this.name} from ${this.id} is access this classroom and his age is ${this.age}!`);
//   }
// }


// const ashis = new Student(1 , "Ashis", 40);
// const asis = new Student(2, "Asis", 20);
   
// let asion: IsStudent;
// asion = new Student(3, "Asion", 26);

// const students: Student[] = [];
// students.push(ashis, asis, asion)

// console.log(students);


// Type Three

// interface IsStudent{
//     id: number;
//     name: string;
//     age: number;

//     info(): string;
// }


// class Student implements IsStudent {
//   constructor(
//     readonly id: number,
//     public name: string,
//     public age: number,
//   ) {}

//   info() {
//     return(`${this.name} from ${this.id} is access this classroom and his age is ${this.age}!`);
//   }
// }


// const ashis = new Student(1 , "Ashis", 40);
// const asis = new Student(2, "Asis", 20);
   
// let asion: IsStudent;
// asion = new Student(3, "Asion", 26);

// const students: IsStudent[] = [];
// students.push(ashis, asis, asion)

// console.log(students);


// access private property by interface

interface IsStudent{
    readonly id: number;
    name: string;
 
    getAge(): number; 
    info(): string;
}


class Student implements IsStudent {
  constructor(
    readonly id: number,
    public name: string,
    private age: number,
  ) {}

  getAge(){
    return this.age;
  }
  info() {
    return(`${this.name} from ${this.id} is access this classroom and his age is ${this.age}!`);
  }
}


const ashis = new Student(1 , "Ashis", 40);
const asis = new Student(2, "Asis", 20);
   
let asion: IsStudent;
asion = new Student(3, "Asion", 26);

const students: IsStudent[] = [];
students.push(ashis, asis, asion)

console.log(students);



