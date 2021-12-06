import * as  menu from '../constants/menuConstants'

export const menuReducer = (state = { menu: [] }, action) => {
    switch (action.type) {
        case menu.ALL_MENU_REQUEST:
            return {
                loading: true
            }

        case menu.ALL_MENU_SUCCESS:
            return {
                ...state,
                loading: false,
                menu: action.payload.products
            }

        case menu.ALL_MENU_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case menu.CLEAR_ERRORS:
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
        case menu.MENU_DETAILS_REQUEST:
            return {
                loading: true
            }

        case menu.MENU_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                menu_item: action.payload.product
            }

        case menu.MENU_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case menu.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}