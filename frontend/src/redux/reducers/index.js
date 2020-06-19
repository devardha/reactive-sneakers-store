import { combineReducers } from 'redux';
import postReducer from './postReducer'
import sortReducer from './sortReducer'
import addReducer from './addReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
    posts: postReducer,
    sortby: sortReducer,
    cart: addReducer,
    account: authReducer,
    error: errorReducer
})