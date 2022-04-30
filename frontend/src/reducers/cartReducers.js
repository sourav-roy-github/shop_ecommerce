import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  SAVE_SHIPPING_INFO,
  CREATE_CART_SUCCESS,
  GET_ALL_CART_SUCCESS,
  DELETE_CART,
  CLEAR_CART,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action,
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        totalPrice: action.payload.totalPrice,
        totalQuantity: action.payload.totalQuantity,
      }

    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      }

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      }

    case CREATE_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload[0].cartItems,
        totalPrice: action.payload[0].totalPrice,
        totalQuantity: action.payload[0].totalQuantity,
      }

    case GET_ALL_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload[0].cartItems,
        totalPrice: action.payload[0].totalPrice,
        totalQuantity: action.payload[0].totalQuantity,
      }

    case DELETE_CART:
      return {
        ...state,
        isDeleted: action.payload,
        cartItems: [],
        totalQuantity: 0,
      }

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        totalQuantity: 0,
      }

    default:
      return state
  }
}
