import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../constants/authConstants'

export const login = (user) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        console.log(user)
        const { data } = await axios.post('/api/v1/login', user, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT_REQUEST
        })

        await axios.get('/api/v1/logout')

        dispatch({
            type: LOGOUT_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}