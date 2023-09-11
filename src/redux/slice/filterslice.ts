const initState = {
    search: '',
    status: 'ALL',
}


const filterReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'filter/search':
            return {
                ...state,
                search: action.payload
            }
        case  'filter/byStatus': {
            return {
                ...state,
                status : action.payload
            }
        }
        default:
            return state

    }
}
export default filterReducer;