
const initState =  [
    {
        id: 1,
        name: 'Learn JAVA',
        status: false,
    },
    {
        id: 2,
        name: 'Learn React Native',
        status: false,
    },
    {
        id: 3,
        name: 'Learn TypeScript',
        status: false,
    },
]

// const todoListReducer = (state = initState, action: any) => {
//     switch (action.type) {
//         case 'todoList/addToDo':
//             console.log(action)
//             return  [
//                 ...state,
//                 action.payload
//             ]
//         case 'todoList/updateTodo':
//             const todoUpdate = state.findIndex(todo => todo.id == action.payload.id)
//             state[todoUpdate] = action.payload
//             return [
//                 ...state
//             ]
//         default:
//             return state

//     }
// }
// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit"; 
const todolistSlice = createSlice({
    name: 'todoList',
    initialState: initState,
    reducers: {
        addToDo : (state, action) =>{
            state.push(action.payload)
        },
        updateTodo : (state, action) =>{
            const todoUpdate = state.findIndex(todo => todo.id == action.payload.id)
            state[todoUpdate].status = !action.payload.status;
        }
    },
})
export const {addToDo,updateTodo} = todolistSlice.actions;

export default todolistSlice.reducer;