import { SET_CURRENT_USER } from '../components/Login/redux/authTypes'

export interface ISetUser {
  type: typeof SET_CURRENT_USER
  payload: IAuthUser
}

export type TAllReduxAuthTypes = ISetUser

export interface IAuthUser {
  exp: number
  iat: number
  userId: number | null
  email: string
}

export interface IUserDataLogin {
  usernameOrEmail: string
  password: string
}

export interface IUserDataRegister {
  email: string
  password: string
  username: string
}
