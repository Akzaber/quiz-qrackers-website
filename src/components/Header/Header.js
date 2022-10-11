import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex justify-between md:px-32 bg-black py-4'>
      <div>
        <h2 className='md:text-4xl text-2xl font-semibold text-white'>Online Quiz</h2>
      </div>
      <div className='text-white md:text-xl'>
        <NavLink className={({isActive}) => isActive? 'active' : undefined} to='/home'>Home</NavLink>
        <NavLink className='mx-4' to='/quiz'>Topics</NavLink>
        <NavLink className='mr-4' to='/statistics'>Statistics</NavLink>
        <NavLink className='mr-4' to='/blog'>Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;