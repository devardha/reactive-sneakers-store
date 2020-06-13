import { ADD_ITEM } from '../actions/types'

const initialState = {
    cart: []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}