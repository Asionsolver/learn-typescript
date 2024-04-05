enum responseType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN}

interface APIResponse<T>{
    status: number;
    type: responseType;
    data: T;
}

const reponseOne : APIResponse<object | string> ={
    status: 200,
    type: responseType.SUCCESS,
    data:{
        name: "ashis",
        age: 26,
        country: "Bangladesh",
        something: 300,
    }
}


const reponseTwo : APIResponse<object | string> ={
    status: 200,
    type: responseType.UNAUTHENTICATED,
    data:'Test2',
}


const reponseThree : APIResponse<string> ={
    status: 200,
    type: responseType.FAILURE,
    data:'Test',
}

console.log(reponseOne)
