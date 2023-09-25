
// import { applyMiddleware, createStore } from "redux"
// import rootReducer from "./reducer";
// const store = createStore<any,any,any,any>(rootReducer);

// export default store


import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slice/filterslice'
import todoListReducer from './slice/todolistslice'
//Redux toolkit store
const store = configureStore({
    reducer: {
        filter : filterReducer,
        todoList : todoListReducer
    }
})

export default store
