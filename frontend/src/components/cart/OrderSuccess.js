import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import { deleteCart } from '../../actions/cartActions'
import { useDispatch } from 'react-redux'

const OrderSuccess = ({ userid }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(deleteCart(userid._id))
  })
  return (
    <Fragment>
      <MetaData title={'Order Success'} />

      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="/images/logo1.png"
            alt="Order Success"
            width="200"
            height="200"
          />

          <h2>Your Order has been placed successfully.</h2>

          <Link to="/orders/me">Go to Orders</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default OrderSuccess
