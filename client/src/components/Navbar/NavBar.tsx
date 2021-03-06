import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import logo from '../../assets/img/logo.png'
import { RootState } from '../../redux/reducers'
import { logout } from '../Login/redux/authActions'

export const NavBar: React.FC = () => {
  const isAuthenticated = useSelector<RootState>((state) => state.authReducer.isAuthenticated)
  const dispatch = useDispatch()

  const onLogoutClick = () => {
    dispatch(logout())
  }

  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__wrapper--first-box'>
          <div className='logo'>
            <div className='logo__box'>
              <img src={logo} className='logo__img' alt='logo' />
            </div>
            <h1 className='logo__text'>
              <NavLink to='/home'>PlanningApp</NavLink>
            </h1>
          </div>
          {!isAuthenticated ? null : (
            <>
              <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/home'>
                Home
              </NavLink>
              <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/tasks'>
                Tasks
              </NavLink>
              <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/events'>
                Events
              </NavLink>
            </>
          )}
        </div>
        <div className='navbar__wrapper--second-box'>
          {isAuthenticated ? (
            <button onClick={onLogoutClick} className='navbar__link--button'>
              Logout
            </button>
          ) : (
            <>
              <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/login'>
                Login
              </NavLink>
              <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/register'>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
