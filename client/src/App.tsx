import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

import store from './redux/store'
import { NavBar } from './components/Navbar/NavBar'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { configureAxiosInterceptors } from './utils/configureAxiosInterceptors'
import { IAuthUser } from './types/Auth'
import { SET_CURRENT_USER } from './components/Login/redux/authTypes'
import { ProtectedRoute } from './common/ProtectedRoute'
import { Homepage } from './routes'

const token = Cookies.get('token')
if (token) {
  const decoded = jwt_decode<IAuthUser>(token)
  store.dispatch({ type: SET_CURRENT_USER, payload: decoded })
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    Cookies.remove('token')
  }
}

configureAxiosInterceptors(store)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <ProtectedRoute component={Homepage} />
      </Switch>
    </Provider>
  )
}

export default App
