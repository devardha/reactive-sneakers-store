import { ADD_ITEM } from './types'

export const addItem = (content) => ({
    type: ADD_ITEM,
    payload: content,
});