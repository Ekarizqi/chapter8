import carApi from "../../api/carApi";
import {ActionTypes} from "../contants/action-types";

export const fetchProducts = () => async (dispatch) => {
        const response = await carApi.get("/car"); 

        dispatch({
            type:ActionTypes.FETCH_PRODUCTS,
            payload:response.data
        });
    };

    

    export const fetchProductDetail = (id) => async (dispatch) => {
        const response = await carApi.get(`/car/${id}`); 

        dispatch({
            type:ActionTypes.SELECTED_PRODUCT,
            payload:response.data
        });
    };

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};