import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, clearErrors } from '../../actions/userActions'
import { UPDATE_USER_RESET } from '../../constants/userConstants'

const UpdateUser = ({ history, match }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const alert = useAlert()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const { error, isUpdated } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.userDetails)

  const userId = params.id

  return <div></div>
}

export default UpdateUser
