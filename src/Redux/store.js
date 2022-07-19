import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "./reducer";

const rootReducer = combineReducers({
    todo:todo,
});

let store = createStore(rootReducer);
export default store