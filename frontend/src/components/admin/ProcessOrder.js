import React, { Fragment, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import {
  getOrderDetails,
  updateOrder,
  clearErrors,
} from '../../actions/orderActions'
import { UPDATE_ORDER_RESET } from '../../constants/orderConstants'

const ProcessOrder = () => {
  const [status, setStatus] = useState('')

  const alert = useAlert()
  const dispatch = useDispatch()
  const params = useParams()

  const { loading, order = {} } = useSelector((state) => state.orderDetails)
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    user,
    totalPrice,
    orderStatus,
  } = order
  const { error, isUpdated } = useSelector((state) => state.order)

  const orderId = params.id

  useEffect(() => {
    dispatch(getOrderDetails(orderId))

    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    if (isUpdated) {
      alert.success('Order updated successfully')
      dispatch({ type: UPDATE_ORDER_RESET })
    }
  }, [dispatch, alert, error, isUpdated, orderId])

  const updateOrderHandler = (id) => {
    const formData = new FormData()
    formData.set('status', status)

    dispatch(updateOrder(id, formData))
  }

  const shippingDetails =
    shippingInfo &&
    `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`
  const isPaid =
    paymentInfo && paymentInfo.status === 'succeeded' ? true : false

  return <div></div>
}

export default ProcessOrder
