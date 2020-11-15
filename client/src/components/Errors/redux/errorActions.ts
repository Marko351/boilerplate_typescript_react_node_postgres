import { AppThunk } from '../../../redux/reducers'
import { IError } from '../../../types/Error'
import { CLEAR_ERRORS, GET_ERRORS } from './errorTypes'

export const getErrors = (errors: IError): AppThunk<void> => async (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: errors,
  })
}

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})
