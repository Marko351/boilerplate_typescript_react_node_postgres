import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { AppThunk } from '../../../redux/reducers'
import { setAuthToken } from '../../../utils/setAuthToken'
import { SET_CURRENT_USER } from './authTypes'
import { IAuthUser } from '../../../types/Auth'

export const loginUser = (): AppThunk<void> => async (dispatch) => {
  const data = {
    usernameOrEmail: 'test@test.com',
    password: 'test123',
  }
  const response = await axios.post('http://localhost:5000/api/v1/auth/login', data)
  setAuthToken(response.data.token)
  const decoded = jwt_decode<IAuthUser>(response.data.token)
  setCurrentUser(decoded)
}

export const registerUser = (): AppThunk<void> => async (dispatch) => {
  const data = {
    // email: 'tsessst12@test.com',
    // password: 'test123',
    // username: 'tesssstest',
  }
  const response = await axios.post('http://localhost:5000/api/v1/auth/register', data)
  setAuthToken(response.data.token)
  const decoded = jwt_decode<IAuthUser>(response.data.token)
  setCurrentUser(decoded)
}

export const setCurrentUser = (decoded: IAuthUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}
