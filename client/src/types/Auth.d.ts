import { SET_CURRENT_USER } from '../components/Login/redux/authTypes'

export interface ISetUser {
  type: typeof SET_CURRENT_USER
  payload: IAuthUser
}

export type TAllReduxAuthTypes = ISetUser

export interface IAuthUser {
  userId: number | null
  email: string
}
