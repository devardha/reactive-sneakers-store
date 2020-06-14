import { UPDATE_QUANTITY } from './types'

export const updateQty = (content) => ({
    type: UPDATE_QUANTITY,
    payload: {
        product_id: content.product_id,
        item: content.item,
        total_price: content.total_price,
        product_index: content.product_index
    },
});