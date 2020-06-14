import { combineReducers } from 'redux';
import postReducer from './postReducer'
import sortReducer from './sortReducer'
import addReducer from './addReducer'

export default combineReducers({
    posts: postReducer,
    sortby: sortReducer,
    cart: addReducer
})