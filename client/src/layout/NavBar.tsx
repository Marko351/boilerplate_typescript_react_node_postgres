import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from '../common/Wrapper';

export const NavBar: React.FC = () => {
  const toggleUserDropdown = () => {
    const element = document.querySelector('.dropdown');
    if (element) {
      if (element.classList.contains('hidden')) element.classList.remove('hidden');
      else element.classList.add('hidden');
    }
  };

  return (
    <div className='bg-colorTertiary p-4 w-screen'>
      <Wrapper>
        <div className='flex justify-between items-center'>
          <div className='flex flex-row items-center'>
            <h1 className='font-bold text-2xl cursor-pointer bg-gray-100 p-1'>PlanningApp</h1>
            <span className='ml-3 text-gray-200'>
              <NavLink to='/'>Home</NavLink>
            </span>
            <span className='ml-3 text-gray-200'>
              <NavLink to='/task'>Add Task</NavLink>
            </span>
            <span className='ml-3 text-gray-200'>
              <NavLink to='/event'>Add Event</NavLink>
            </span>
          </div>
          {/* <div className='text-gray-200 cursor-pointer'>
            <span className='mr-3'>Login</span>
            <span>Register</span>
          </div> */}
          <div className='mr-3 relative'>
            <div>
              <button
                className='max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid'
                onClick={toggleUserDropdown}
                id='user-menu'
                aria-label='User menu'
                aria-haspopup='true'>
                <img
                  className='h-8 w-8 rounded-full'
                  src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                  alt=''
                />
                <span className='ml-2'>Username</span>
              </button>
            </div>
            {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
            <div className='hidden dropdown origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10'>
              <div
                className='py-1 rounded-md bg-white w-full shadow-xs'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu'>
                <button className='block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                  Your Profile
                </button>

                <button className='block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                  Settings
                </button>

                <button className='block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100' role='menuitem'>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
