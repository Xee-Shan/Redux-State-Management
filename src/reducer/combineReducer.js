import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import getUserReducer from "./getUserReducer";

export default combineReducers({
    counter : counterReducer,
    getUser : getUserReducer
})
