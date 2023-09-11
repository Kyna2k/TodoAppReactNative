import { TODO } from "./reducer"



export const addTodoAction = (todo : TODO) => {
   return {
        type: 'todoList/addToDo',
        payload : todo
   }
}

export const ListTodo = () =>{
    return {
        type : 'todoList/GetList',
    }
}
export const updateStatusTodo = (todo: TODO) => {
    return {
        type: 'todoList/updateTodo',
        payload : todo,
    }
}

export const searchFilterChange = (text: string) =>{
    return {
        type : 'filter/search',
        payload : text
    }
}
export const filterByStatus = (status: string) =>{
    return {
        type : 'filter/byStatus',
        payload : status,
    }
}
