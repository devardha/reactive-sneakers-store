import { SORTBY_PRICE_LOW, SORTBY_PRICE_HIGH, SORTBY_LATEST } from './types'

export const sortByPriceLow = () => ({
    type: SORTBY_PRICE_LOW,
    payload: 'PRICE_LOW',
});

export const sortByPriceHigh = () => ({
    type: SORTBY_PRICE_HIGH,
    payload: 'PRICE_HIGH',
});

export const sortByLatest = () => ({
    type: SORTBY_LATEST,
    payload: 'LATEST',
});