import { SET_POSTS_ALL, CREATE_NEW_POST, GET_SPECIFIC_POST } from '../../helpers/constants'
import { postAlbert, postJennifer, postPatricia } from '../../helpers/data'

const initialState = { 
    postsAllChron: [postJennifer,],
    newPost: null,
    specificPost: null,
}

export default function postReducer (state = initialState, action) {
    switch (action.type) {
        case SET_POSTS_ALL: {
            const newState = {...state}
            newState.postsAllChron = action.payload
            newState.postsAllChron.reverse()
            newState.postsAllChron.unshift(postPatricia, postJennifer, postAlbert)
            return newState
        }
        case CREATE_NEW_POST: {
            const newState = {...state}
            newState.newPost = action.payload
            return newState
        }
        case GET_SPECIFIC_POST: {
            const newState = {...state}
            newState.specificPost = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}
