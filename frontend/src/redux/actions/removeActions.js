import { REMOVE_ITEM } from './types'

export const removeItem = (content) => ({
    type: REMOVE_ITEM,
    payload: content,
});