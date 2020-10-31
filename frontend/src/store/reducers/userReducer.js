import { SET_USER, SET_USER_ALL } from '../../helpers/constants'
import { albert, leticia, patricia, max, frank, thomas } from '../../helpers/data'


const initialState = { 
    user: [],
    users: [],
}

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            const newState = {...state}
            newState.user = action.payload
            return newState
        }
        case SET_USER_ALL: {
            const newState = {...state}
            newState.users = action.payload
            newState.users.unshift(albert, leticia, patricia, frank, thomas, max,)
            return newState
        }
        default: {
            return state
        }
    }
}

