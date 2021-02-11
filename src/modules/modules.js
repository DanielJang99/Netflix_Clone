import { combineReducers } from "redux";
import { movieReducer } from "./movies_action";
import searchReducer from "./search_action";

const rootReducer = combineReducers({
    movieReducer,
    searchReducer,
});

export default rootReducer;
