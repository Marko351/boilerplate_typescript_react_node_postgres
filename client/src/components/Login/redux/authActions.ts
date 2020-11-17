import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { AppThunk } from '../../../redux/reducers'
import { setAuthToken } from '../../../utils/setAuthToken'
import { SET_CURRENT_USER } from './authTypes'
import { IAuthUser, IUserDataLogin, IUserDataRegister } from '../../../types/Auth'

export const loginUser = (data: IUserDataLogin): AppThunk<void> => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/api/v1/auth/login', data)
  setAuthToken(response.data.token)
  const decoded = jwt_decode<IAuthUser>(response.data.token)
  dispatch(setCurrentUser(decoded))
}

export const registerUser = (data: IUserDataRegister): AppThunk<void> => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/api/v1/auth/register', data)
  setAuthToken(response.data.token)
  const decoded = jwt_decode<IAuthUser>(response.data.token)
  dispatch(setCurrentUser(decoded))
}

export const setCurrentUser = (decoded: IAuthUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}
