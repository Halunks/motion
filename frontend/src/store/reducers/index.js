import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'


export const reducer = combineReducers({ authReducer, userReducer, postReducer });
