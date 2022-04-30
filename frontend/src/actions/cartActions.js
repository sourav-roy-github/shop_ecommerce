import axios from 'axios'
import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  SAVE_SHIPPING_INFO,
  GET_ALL_CART_REQUEST,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  CREATE_CART_FAIL,
  CREATE_CART_SUCCESS,
  DELETE_CART,
  CLEAR_CART,
} from '../constants/cartConstants'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const addItemToCart = (id, quantity, userid) => async (dispatch) => {
  dispatch(createCart(userid))

  const cartRes = await axios.post(
    '/api/v1/cart/addItem',
    {
      user: userid,
      product_id: id,
      quantity: quantity,
    },
    config,
  )

  dispatch({
    type: ADD_TO_CART,
    payload: cartRes.data.cart,
  })
}

//remove item from cart
export const removeItemFromCart = (productID, userID) => async (dispatch) => {
  await axios.post(
    '/api/v1/cart/deleteItem',
    {
      userID: userID,
      productID: productID,
    },
    config,
  )
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: productID,
  })
}

//shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  })

  localStorage.setItem('shippingInfo', JSON.stringify(data))
}

export const getAllCart = (userid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_CART_REQUEST,
    })
    const cartData = await axios.get(`/api/v1/cart/${userid}`)

    dispatch({
      type: GET_ALL_CART_SUCCESS,
      payload: cartData.data.cart,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_CART_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const createCart = (userid) => async (dispatch) => {
  try {
    const cartData = await axios.get(`/api/v1/cart/${userid}`)
    dispatch({
      type: CREATE_CART_SUCCESS,
      payload: cartData.data.cart,
    })
  } catch (error) {
    dispatch({
      type: CREATE_CART_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const deleteCart = (userid) => async (dispatch) => {
  const cartData = await axios.get(`/api/v1/cart/delete/${userid}`)
  dispatch({
    type: DELETE_CART,
    payload: cartData.success,
  })
}

export const clearCart = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CART,
    payload: [],
  })
}
