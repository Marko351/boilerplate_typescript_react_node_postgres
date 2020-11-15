import { GET_ERRORS, CLEAR_ERRORS } from '../components/Errors/redux/errorTypes'

export interface IGetErrors {
  type: typeof GET_ERRORS
  payload: IError
}

export interface IClearErrors {
  type: typeof CLEAR_ERRORS
  payload: {}
}

export type TAllReduxErrorTypes = IGetErrors | IClearErrors

export interface IError {
  [key: string]: string
}
