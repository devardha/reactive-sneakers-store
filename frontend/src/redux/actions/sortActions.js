import { SORTBY_PRICE_LOW, SORTBY_PRICE_HIGH } from './types'

export const sortByPriceLow = () => ({
    type: SORTBY_PRICE_LOW,
    payload: 'PRICE_LOW',
});

export const sortByPriceHigh = () => ({
    type: SORTBY_PRICE_HIGH,
    payload: 'PRICE_HIGH',
});