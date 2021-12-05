import * as product from '../constants/productConstants';

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case product.ADD_PRODUCT_REQUEST:
            return {
                loading: true
            }

        case product.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload.product]
            }

        case product.ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}