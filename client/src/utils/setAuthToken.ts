import Cookies from 'js-cookie'

export const setAuthToken = (token: string) => {
  if (token) {
    Cookies.set('token', token)
  } else {
    Cookies.remove('token')
  }
}
