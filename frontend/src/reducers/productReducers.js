import * as product from '../constants/productConstants';

export const productReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case product.ADD_PRODUCT_REQUEST:
            return {
                loading: true
            }

        case product.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
                loading: false,
                product: action.payload.product
            }

        case product.ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case product.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}