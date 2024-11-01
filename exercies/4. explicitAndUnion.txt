let a:string;
a = 'ashis';
// a = 45; // Type 'number' is not assignable to type 'string'.

let b : string | number;
b = 'ashis';
b = 45;
// b = true; // Type 'boolean' is not assignable to type 'string | number'.

let array:string[] = [];

array.push('ashis');
// array.push(45); //Argument of type 'number' is not assignable to parameter of type 'string'.

let mixed:(string | number)[] = []; 

mixed.push('ashis', 45);
// mixed.push(false); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

let obj : object; // this is not an structure way
obj = {
    name: "ashis",
    age: 23,
}

let obj2 : { // this is an structure way
    name: string,
    age: number,
}

obj2 ={
    name: "ashis",
    age: 45,
}

let obj3: object;
obj3 = [45, 53]; // its allow to assign array in obj3 because i can only declare obj3 is an obj. So array is a one type of object