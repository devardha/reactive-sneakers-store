import { ADD_ITEM, UPDATE_QUANTITY } from '../actions/types'
import update from 'immutability-helper';

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
        case UPDATE_QUANTITY:
            return update(state, { 
                cart: { 
                  [action.payload.product_index]: {
                    item: {$set: action.payload.item},
                    total_price: {$set: action.payload.total_price},
                    product_index: {$set: action.payload.product_index}
                  }
                }
            });
        default:
            return state;
    }
}