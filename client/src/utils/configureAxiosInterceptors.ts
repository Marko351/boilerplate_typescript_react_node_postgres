import axios, { AxiosResponse } from 'axios'
import { clearErrors, getErrors } from '../components/Errors/redux/errorActions'
import { HTTP_UNAUTHORIZED, HTTP_VALIDATION_ERROR } from '../constants/httpStatus'

const handledErrorStatuses = [HTTP_UNAUTHORIZED, HTTP_VALIDATION_ERROR]

export const configureAxiosInterceptors = (store: any) => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      store.dispatch(clearErrors())
      return response
    },
    (error) => {
      store.dispatch(clearErrors())
      if (handledErrorStatuses.includes(error.response.status)) {
        store.dispatch(getErrors(error.response.data))
      }
      // else {
      // }
      return new Promise((_resolve, reject) => {
        reject(error)
      })
    },
  )
}
