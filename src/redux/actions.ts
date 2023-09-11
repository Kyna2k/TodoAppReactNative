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