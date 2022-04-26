import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'

const NewProduct = ({ history }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState(0)
  const [seller, setSeller] = useState('')
  const [images, setImages] = useState([])
  const [imagesPreview, setImagesPreview] = useState([])

  const categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    'Books',
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home',
  ]

  const alert = useAlert()
  const dispatch = useDispatch()

  const { loading, error, success } = useSelector((state) => state.newProduct)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (success) {
      navigate('/admin/products')
      alert.success('Product created successfully')
      dispatch({ type: NEW_PRODUCT_RESET })
    }
  }, [dispatch, alert, error, success, history])

  return <div></div>
}

export default NewProduct
