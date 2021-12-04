import {
    ALL_MENU_REQUEST,
    ALL_MENU_SUCCESS,
    ALL_MENU_FAIL,
    MENU_DETAILS_REQUEST,
    MENU_DETAILS_SUCCESS,
    MENU_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/menuConstants'

export const menuReducer = (state = { menu: [] }, action) => {
    switch (action.type) {
        case ALL_MENU_REQUEST:
            return {
                loading: true
            }

        case ALL_MENU_SUCCESS:
            return {
                ...state,
                loading: false,
                menu: action.payload.products
            }

        case ALL_MENU_FAIL:
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

export const menuDetailsReducer = (state = { menu_item: {} }, action) => {
    switch (action.type) {
        case MENU_DETAILS_REQUEST:
            return {
                loading: true
            }

        case MENU_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                menu_item: action.payload.product
            }

        case MENU_DETAILS_FAIL:
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