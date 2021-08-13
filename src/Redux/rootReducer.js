import { combineReducers } from "redux";
import displayReducer from "./display/displayReducer";
import msgReducer from "./messages/msgReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    users : userReducer,
    display: displayReducer,
    messages : msgReducer
})

export default rootReducer;