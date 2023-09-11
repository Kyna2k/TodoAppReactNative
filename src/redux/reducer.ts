
export type TODO = {
    id: number | String;
    name: string;
    status: boolean;
};

const initState = {
    filter: {
        search: '',
        status: 'ALL',
    },
    todoList: [
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
}


const rootReducer = (state = initState, action: any) => {
    console.log(state.todoList)
    switch(action.type)
    {
        case 'todoList/addToDo' : 
            console.log(action)
            return {
                ...state,
                todoList : [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'todoList/GetList' :
            return  

        default : 
            return state

    }
}
export default rootReducer;