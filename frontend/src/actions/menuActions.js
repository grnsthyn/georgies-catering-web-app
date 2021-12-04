import axios from 'axios'
import {
    ALL_MENU_REQUEST,
    ALL_MENU_SUCCESS,
    ALL_MENU_FAIL,
    MENU_DETAILS_REQUEST,
    MENU_DETAILS_SUCCESS,
    MENU_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/menuConstants'

export const getAllMenu = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_MENU_REQUEST
        })

        const { data } = await axios.get('/api/v1/products')

        dispatch({
            type: ALL_MENU_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_MENU_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getMenuDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: MENU_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: MENU_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MENU_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}