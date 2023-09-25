const initState = {
    search: '',
    status: 'ALL',
}


// const filterReducer = (state = initState, action: any) => {
//     switch (action.type) {
//         case 'filter/search':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case  'filter/byStatus': {
//             return {
//                 ...state,
//                 status : action.payload
//             }
//         }
//         default:
//             return state

//     }
// }

import { createSlice } from "@reduxjs/toolkit"; 
const filterSlice = createSlice({
    name : 'filter',
    initialState: initState,
    reducers :{
        search:  (state, action) => {
            state.search = action.payload
        },
        byStatus : (state, action) => {
            state.status = action.payload
        },
    }
})

export const {search, byStatus} = filterSlice.actions;

export default filterSlice.reducer;