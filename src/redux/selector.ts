import { TODO } from "./reducer";

import { createSelector } from "@reduxjs/toolkit";

// export const GetListToDo = (state : any) => {
//     const newListTodo = state.todoList.filter((todo : TODO) => {
//         return todo.name.toLowerCase().includes(state.filter.search.toLowerCase())
//     })
//     return newListTodo
// }


export const SearchTextSelector = (state: any) => state.filter.search;
export const GetListToDo = (state: any) => state.todoList;

export const StatusSelector = (state: any) => state.filter.status


export const todoRemainingSelector = createSelector(
    SearchTextSelector,
    StatusSelector,
    GetListToDo,
    (search, status ,todoList) => {
        const newListTodo = todoList.filter((todo: TODO) => {
            if(status == "ALL") {
                return todo.name.toLowerCase().includes(search.toLowerCase())
            }else{
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.status === (
                    status === "Completed"
                )
            }
            
            
        })
        return newListTodo;
        
    }
);

