import { SET_TOKEN } from '../../helpers/constants'

const initialState = { 
    token: undefined, //localStorage.getItem("token")
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}
