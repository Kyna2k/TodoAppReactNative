
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

const todoListReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'todoList/addToDo':
            console.log(action)
            return  [
                ...state,
                action.payload
            ]
        case 'todoList/updateTodo':
            const todoUpdate = state.findIndex(todo => todo.id == action.payload.id)
            state[todoUpdate] = action.payload
            return [
                ...state
            ]
        default:
            return state

    }
}
export default todoListReducer;