const initialState = {
    data : [],
    isLoading : false,
    error : ""
};

const getUserReducer = (state = initialState, action) =>{
    switch(action.type){
        case "loading" : {
            return {
                ...state,
                isLoading : true
            };
        }
        case "isError" : {
            return {
                ...state,
                error : action.payload
            };
        }
        case "fetched" : {
            return{
                ...state,
            isLoading : false,
            data : action.payload
            };
        }
        default :
            return state;
    }
}
export default getUserReducer;

