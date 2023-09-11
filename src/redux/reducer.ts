import filterReducer from "./slice/filterslice";
import todoListReducer from "./slice/todolistslice";
import { combineReducers } from 'redux'
export type TODO = {
    id: number | String;
    name: string;
    status: boolean;
};

//version 1
// const rootReducer = (state = initState, action: any) => {
//     switch (action.type) {
//         case 'todoList/addToDo':
//             console.log(action)
//             return {
//                 ...state,
//                 todoList: [
//                     ...state.todoList,
//                     action.payload
//                 ]
//             }
//         case 'todoList/updateTodo':
//             state.todoList[action.index] = action.payload
//             return {
//                 ...state,
//                 todoList: [
//                     ...state.todoList
//                 ]
//             }
//         case 'filter/search':
//             return {
//                 ...state,
//                 filter: {
//                     ...state.filter,
//                     search: action.payload
//                 }
//             }

//         default:
//             return state

//     }
// }
//version 2
// const rootReducer = (state  = {} ,action: any) =>{
//     return {
//         filter : filterReducer(state.filter,action),
//         todoList : todoListReducer(state.todoList,action)
//     }

// }

const rootReducer = combineReducers(
   {
    filter : filterReducer,
    todoList : todoListReducer
   }
)
export default rootReducer;