// let myFunc: Function;

// myFunc = ()=>{
//     console.log('hello');
// } 

// myFunc = 45; // Type 'number' is not assignable to type 'Function'.


// optional parameter -> ?
const myFunc = (a: string, b: string, c?: string)=>{
    console.log(`${a} : hello ${b} ${c}`);

}
myFunc('Ashis', ". How are you.")

// Default parameter
const myFuncTwo = (a: string, b: string, c: string = '. Are you okay?')=>{
    console.log(`${a} : hello ${b} ${c}`);

}

myFuncTwo('Ashis', ". How are you? ")

const myFuncThree = (a: string, b: string, c: string = '. Are you okay?')=>{
   return a + b;
}

console.log(myFuncThree('Ashis', ". How are you? "))