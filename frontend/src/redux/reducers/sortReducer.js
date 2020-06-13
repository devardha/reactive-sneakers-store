import { SORTBY_PRICE_HIGH, SORTBY_PRICE_LOW, SORTBY_LATEST} from '../actions/types'

const initialState = {
    sortby: '',
}

export default function(state = initialState, action){
    switch(action.type){
        case SORTBY_PRICE_LOW:
            return{
                sortby: action.payload
            }
        case SORTBY_PRICE_HIGH:
            return{
                sortby: action.payload
            }
        case SORTBY_LATEST:
            return{
                sortby: action.payload
            }
        default:
            return state;
    }
}