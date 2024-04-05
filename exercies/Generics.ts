// Generic

// const addId = <T extends {
//     name: string;
//     age: number;
// }>(obj: T) =>{
//     let id = Math.floor(Math.random() * 100);
//     return{...obj, id};
// }

// let user = {
//     name: "Ashis",
//     age: 26,
//     country: "Bangledesh",
// }

// addId(user);


// interface

interface APIResponse<T>{
    status: number;
    type: string;
    data: T;
}

const reponseOne : APIResponse<object | string> ={
    status: 200,
    type: 'good',
    data:{
        name: "ashis",
        age: 26,
        country: "Bangladesh",
        something: 300,
    }
}


const reponseTwo : APIResponse<object | string> ={
    status: 200,
    type: 'good',
    data:'Test2',
}


const reponseThree : APIResponse<string> ={
    status: 200,
    type: 'good',
    data:'Test',
}
