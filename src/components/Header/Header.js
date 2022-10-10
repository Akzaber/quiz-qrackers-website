import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex justify-between md:px-32 bg-yellow-500 py-4'>
      <div>
        <h2 className='md:text-4xl text-2xl font-semibold text-white'>Online Quiz</h2>
      </div>
      <div className='text-white md:text-xl'>
        <NavLink className={`mr-4 ${({isActive}) => isActive? 'activeClassName' : undefined}`} to='/'>Home</NavLink>
        <NavLink className='mr-4' to='/statistics'>Statistics</NavLink>
        <NavLink className='mr-4' to='/blog'>Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;