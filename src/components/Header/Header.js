import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex justify-between items-center md:px-32 bg-yellow-400 py-4'>
      <div>
        <h2 className='md:text-4xl text-2xl font-bold text-black'>Online Quiz</h2>
      </div>
      <div className='text-black  font-semibold md:text-xl'>
        <NavLink className={({isActive}) => isActive? 'active' : undefined} to='/home'>Home</NavLink>
        <NavLink className='md:mx-4 mx-2' to='/quiz'>Topics</NavLink>
        <NavLink className='md:mr-4 mx-2' to='/statistics'>Statistics</NavLink>
        <NavLink className='md:mr-4 mx-2' to='/blog'>Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;