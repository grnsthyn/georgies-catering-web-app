import * as auth from '../constants/authConstants'

export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case auth.LOGIN_REQUEST:
        case auth.LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case auth.LOGIN_SUCCESS:
        case auth.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case auth.LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }

        case auth.LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                loadError: action.payload
            }

        case auth.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case auth.LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case auth.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}