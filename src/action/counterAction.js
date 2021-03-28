export const increment = (value)=>{
    return {
        type : "increase",
        payload : value
    };
}

export const decrement = (value)=>{
    return {
        type : "decrease",
        payload : "value"
    };
}

export const isLogged = ()=>{
    return {
        type : "logged"
    };
}