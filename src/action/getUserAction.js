import axios from "axios";

const isLoading = () =>{
    return {
        type : "loading"
    };
}
const isError = (error) =>{
    return {
        type : "isError",
        payload : error
    }
}
const dataFetched = (data) =>{
    return {
        type : "fetched",
        payload : data
    }
}
export const getData = () =>{
    return async (dispatch) =>{
        dispatch(isLoading());
        try{
            const response = await axios.get(
                "https://api.mocki.io/v1/b043df5a"
            )
            dispatch(dataFetched(response.data));
        }
        catch(error){
            dispatch(isError(error.message));
        }
    }
}