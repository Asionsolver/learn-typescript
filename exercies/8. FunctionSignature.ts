let add: (x: number, y: number) => number;

add = (a: number, b: number) =>{
    return a + b;
}

let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) =>{
    if(c === "add"){
        return a + b;
    } else if(c === "minus"){
        return a - b;
    }else{
        return a * b;
    }
}

console.log(calculation(9, 2,"multiply"))

let userDetails: (id: number | string, userInfo:{
    userName: string,
    age: number
}) => string

userDetails = (id: number | string, userInfo: {
    userName: string,
    age: number
})=>{
    return (`User ID is ${id}. This user name is ${userInfo.userName} and age is ${userInfo.age}`)
}

console.log(userDetails(45,{userName:"ashis",age:45}))