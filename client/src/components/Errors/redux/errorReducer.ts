import { IError, TAllReduxErrorTypes } from '../../../types/Error'
import { CLEAR_ERRORS, GET_ERRORS } from './errorTypes'

interface IStateErrors {
  errors: IError
}

const initialState: IStateErrors = {
  errors: {},
}

export const errorReducer = (state = initialState, action: TAllReduxErrorTypes): IStateErrors => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      }
    default:
      return state
  }
}
