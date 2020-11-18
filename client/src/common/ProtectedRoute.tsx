import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import { RootState } from '../redux/reducers'

interface ProtectedRouteProps {
  component: React.ComponentType<RouteComponentProps<any>>
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector<RootState>((state) => state.authReducer.isAuthenticated)

  if (!Component) return null
  if (isAuthenticated === false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    )
  } else {
    return (
      <Route
        {...rest}
        render={(props) => {
          return isAuthenticated === true ? <Component {...props} /> : <Redirect to='/' />
        }}
      />
    )
  }
}
