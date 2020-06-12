import { combineReducers } from 'redux';
import postReducer from './postReducer'
import sortReducer from './sortReducer'

export default combineReducers({
    posts: postReducer,
    sortby: sortReducer
})