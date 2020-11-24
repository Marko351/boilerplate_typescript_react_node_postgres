import Cookies from 'js-cookie'

export const setAuthToken = (token: string): void => {
  if (token) {
    Cookies.set('token', token)
  } else {
    Cookies.remove('token')
  }
}
