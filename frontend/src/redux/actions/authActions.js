import { SIGNUP_FAILED, USER_LOADING, USER_LOADED, AUTH_ERROR, SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from './types'
import axios from 'axios'
import { returnError } from '../actions/errorActions'

// Load The Authenticated User Data
export const loadUser = () => (dispatch, getState) => {

    dispatch({
        type: USER_LOADING
    })

    axios.get('http://localhost:5000/api/auth/user', tokenConf(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// Register A New User
export const registerUser = ({firstname, lastname, email, password}) => dispatch => {

    const data = JSON.stringify({ firstname, lastname, email, password })

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post('http://localhost:5000/api/user/add', data, config)
        .then(res =>
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(
                returnError(err.response.data, err.response.status, 'SIGNUP_FAILED')
            );
            dispatch({
                type: SIGNUP_FAILED
            }
        );
    });
}

// Login A User
export const loginUser = ({email, password}) => dispatch => {

    const data = JSON.stringify({ email, password })

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post('http://localhost:5000/api/auth', data, config)
        .then(res =>
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(
                returnError(err.response.data, err.response.status, 'LOGIN_FAILED')
            );
            dispatch({
                type: LOGIN_FAILED
            }
        );
    });
}

// Signout The User
export const logout = () => {

    return{
        type: LOGOUT_SUCCESS
    }
}

export const tokenConf = getState => {
    const token = getState().account.token;
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // Set headers
    if(token){
        config.headers['Authorization'] = token;
    }

    return config;
}