import { IAuthUser, TAllReduxAuthTypes } from '../../../types/Auth'
import { isEmpty } from '../../../utils/isEmpty'
import { SET_CURRENT_USER } from './authTypes'

export type TStateAuth = {
  isAuthenticated: boolean
  user: IAuthUser
}

const initialState: TStateAuth = {
  isAuthenticated: false,
  user: {
    userId: null,
    email: '',
    exp: null,
    iat: null,
    username: '',
  },
}

export const authReducer = (state = initialState, action: TAllReduxAuthTypes): TStateAuth => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }
    default:
      return state
  }
}
