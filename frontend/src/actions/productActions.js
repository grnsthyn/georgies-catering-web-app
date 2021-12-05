import axios from 'axios';
import * as product from '../constants/productConstants';


export const createProduct = (newProduct) => async (dispatch) => {
    try{
        dispatch({
            type: product.ADD_PRODUCT_REQUEST
        })


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(newProduct)
        const { data } = await axios.post('/api/v1/admin/product/new', newProduct, config);

        dispatch({
            type: product.ADD_PRODUCT_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: product.ADD_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: product.CLEAR_ERRORS
    })
}