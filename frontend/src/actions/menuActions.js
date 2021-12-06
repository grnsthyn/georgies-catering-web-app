import axios from 'axios'
import * as menu from '../constants/menuConstants'

export const getAllMenu = () => async (dispatch) => {
    try {
        dispatch({
            type: menu.ALL_MENU_REQUEST
        })

        const { data } = await axios.get('/api/v1/products')

        dispatch({
            type: menu.ALL_MENU_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: menu.ALL_MENU_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getMenuDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: menu.MENU_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: menu.MENU_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: menu.MENU_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: menu.CLEAR_ERRORS
    })
}