import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGIN_FAILED, SIGNUP_FAILED, LOGOUT_SUCCESS, USER_LOADING, USER_LOADED, AUTH_ERROR } from '../actions/types'

const initialState = {
    token: localStorage.getItem('AUTHTOKEN'),
    isAuthenticated: null,
    user: null,
    isLoading: null
}

export default function(state = initialState, action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            localStorage.setItem('AUTHTOKEN', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticated: true
            }
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            localStorage.removeItem('AUTHTOKEN')
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                user: null,
                isLoading: false
            }
        default:
            return state
    }
}