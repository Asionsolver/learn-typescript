// const userDetails = (
//     id: string | number,
//     user : {name: string; age: number}
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };

// const syHello = (user: { name: string; age: number}) =>{
//     console.log(`hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`)
// }



// Type Aliases

type stringOrNum = string | number;
type userType =  {name: string; age: number};

const userDetails = (id: stringOrNum, user : userType) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const syHello = (user: userType) =>{
    console.log(`hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`)
}