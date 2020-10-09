import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <div className='bg-gray-800 h-16 w-screen flex justify-between items-center p-8'>
      <div className='flex flex-row items-center'>
        <h1 className='font-bold text-2xl cursor-pointer bg-gray-100 p-1'>PlaningApp</h1>
        <span className='ml-3 text-gray-200'>
          <NavLink to='/tasks'>Tasks</NavLink>
        </span>
        <span className='ml-3 text-gray-200'>
          <NavLink to='/events'>Events</NavLink>
        </span>
      </div>
      <div className='text-gray-200 cursor-pointer'>
        <span className='mr-3'>Login</span>
        <span>Register</span>
      </div>
    </div>
  );
};
