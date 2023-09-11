
import { applyMiddleware, createStore } from "redux"
import rootReducer from "./reducer";
const store = createStore<any,any,any,any>(rootReducer);

export default store


