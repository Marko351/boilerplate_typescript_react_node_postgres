import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

export const NavBar: React.FC = (props) => {
  return (
    <div className='navbar'>
      <div className='navbar__wrapper wrapper'>
        <div className='navbar__wrapper--first-box'>
          <div className='logo'>
            <div className='logo__box'>
              <img src={logo} className='logo__img' alt='logo' />
            </div>
            <h1 className='logo__text'>
              <NavLink to='/home'>PlanningApp</NavLink>
            </h1>
          </div>
          <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/home'>
            Home
          </NavLink>
          <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/task'>
            Add Task
          </NavLink>
          <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/event'>
            Add Event
          </NavLink>
        </div>
        <div className='navbar__wrapper--second-box'>
          <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/login'>
            Login
          </NavLink>
          <NavLink className='navbar__link' activeClassName='navbar__link--active' to='/register'>
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};
