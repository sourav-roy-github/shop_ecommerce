import React, { Fragment, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allOrders, clearErrors } from '../../actions/orderActions'
//import { DELETE_ORDER_RESET } from '../../constants/orderConstants'

const OrdersList = ({ history }) => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, orders } = useSelector((state) => state.allOrders)
  //const { isDeleted } = useSelector((state) => state.order)

  useEffect(() => {
    dispatch(allOrders())

    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    if (isDeleted) {
      alert.success('Order deleted successfully')
      navigate('/admin/orders')
      dispatch({ type: DELETE_ORDER_RESET })
    }
  }, [dispatch, alert, error, isDeleted, history])

  return <div></div>
}

export default OrdersList
