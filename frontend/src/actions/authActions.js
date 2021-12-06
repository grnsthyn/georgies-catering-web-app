import axios from 'axios'
import * as auth from '../constants/authConstants'

export const login = (user) => async (dispatch) => {
    try {
        dispatch({
            type: auth.LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        console.log(user)
        const { data } = await axios.post('/api/v1/login', user, config)

        dispatch({
            type: auth.LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: auth.LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: auth.LOGOUT_REQUEST
        })

        await axios.get('/api/v1/logout')

        dispatch({
            type: auth.LOGOUT_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: auth.LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: auth.LOAD_USER_REQUEST
        })

        const { data } = await axios.get('/api/v1/me')

        dispatch({
            type: auth.LOAD_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: auth.LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: auth.CLEAR_ERRORS
    })
}