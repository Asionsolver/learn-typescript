function multiply (a: number, b: number){
    return a * b;
}

console.log(multiply(4,5));


let fruits = ['apple','orange','banana'];

// fruits.push(45);

let mixed = [45,'orange',false]; // only push number, string and boolean value

mixed.push(96);
mixed.push("guava");
mixed.push(true);
// mixed.push({
//     name: "ashis", // but you can push object. So you can not push this element in mixed array
// })

let person ={
    name: 'asis',
    age:26,
    isCaptain:true,
}

// person.name = 45; // type number is not assignable to type string
person.name = 'ashis';
// person.country = "Bangladesh" // Property "courtry does not exist on type '{ name: string; age: number; isCaptain: boolean; }'.

  
   