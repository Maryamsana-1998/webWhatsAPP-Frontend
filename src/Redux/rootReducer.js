import { combineReducers } from "redux";
import displayReducer from "./display/displayReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    users : userReducer,
    display: displayReducer
})

export default rootReducer;