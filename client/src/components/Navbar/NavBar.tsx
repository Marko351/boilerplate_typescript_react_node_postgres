import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
  // const toggleUserDropdown = () => {
  //   const element = document.querySelector('.dropdown');
  //   if (element) {
  //     if (element.classList.contains('hidden')) element.classList.remove('hidden');
  //     else element.classList.add('hidden');
  //   }
  // };

  return (
    <div className='navbar'>
      <div className='navbar__wrapper wrapper'>
        <div className='navbar__wrapper--first-box'>
          <div className='navbar__logo-box'>
            <h1 className='navbar__logo'>
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
